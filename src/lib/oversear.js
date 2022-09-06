import { ComputeEngine } from '@cortex-js/compute-engine';
import nerdamer from 'nerdamer/all.min';

//Sear != Seer
class Oversear {
	constructor() {
		this.equations = {};
		this.equationsToVariables = {};
		this.variablesToEquations = {};
		this.solvedVariables = {};
		this.ce = new ComputeEngine();
		this.ce.jsonSerializationOptions = {
			exclude: [],
			shorthands: []
		};
	}

	printStore() {
		return this.equationsToVariables;
	}

	subParser(uuid, expression) {
		if (expression.fn) {
			for (const subexpression of expression.fn) {
				this.subParser(uuid, subexpression);
			}
		} else if (expression.sym) {
			if (this.equationsToVariables[uuid]) {
				this.equationsToVariables[uuid].push(expression.sym);
			} else {
				this.equationsToVariables[uuid] = [expression.sym];
			}
		} else if (expression.num) {
			// do nothing
		} else if (expression.str) {
			// do nothing
		}
	}

	filterStores(uuid) {
		this.equationsToVariables[uuid] = [...new Set(this.equationsToVariables[uuid])];
		this.variablesToEquations = {};
		for (const equation in this.equationsToVariables) {
			for (const variable in this.equationsToVariables[equation]) {
				let varx = this.equationsToVariables[equation][variable];
				if (this.variablesToEquations[varx]) {
					this.variablesToEquations[varx].push(equation);
				} else {
					this.variablesToEquations[varx] = [equation];
				}
			}
		}
	}

	removeEquation(uuid, equation) {
		delete this.equations[uuid];
	}

	mfExpr(mf) {
		return this.ce.parse(mf);
	}

	solveVariables(eqs) {
		let parsedEqs = [];
		for (const equation in eqs) {
			let mfexpr = nerdamer.convertFromLaTeX(this.mfExpr(eqs[equation]).latex);
			parsedEqs.push(mfexpr.toString());
		}

		let solutions = nerdamer.solveEquations(parsedEqs);

		for (const solution in solutions) {
			if (solutions[solution][1]) {
				this.solvedVariables[solutions[solution][0]] = solutions[solution][1];
			} else {
				//handling nerdamer solveEquations edge case of a single equation
				this.solvedVariables[solutions[solution][0]] = solutions[solution][1].toDecimal();
				// (solutions[solution][1]).multiplier.num.value/(solutions[solution][1]).multiplier.den.value;
			}
		}
	}

	getCombinations(valuesArray) {
		var combi = [];
		var temp = [];
		var slent = Math.pow(2, valuesArray.length);

		for (var i = 0; i < slent; i++) {
			temp = [];
			for (var j = 0; j < valuesArray.length; j++) {
				if (i & Math.pow(2, j)) {
					temp.push(valuesArray[j]);
				}
			}
			if (temp.length > 0) {
				combi.push(temp);
			}
		}

		combi.sort((a, b) => a.length - b.length);
		return combi.reverse();
	}

	recursiveSolve(eqs) {
		let eqs_combo = this.getCombinations(Object.values(eqs));
		let error = false;
		for (const equationSet in eqs_combo) {
			try {
				error = false;
				this.solveVariables(eqs_combo[equationSet]);
			} catch (error) {
				// this.solvedVariables = {};
				error = true;
				continue;
			}
			if (error == false) {
				break;
			}
		}
		//nerdamer fails to solve equations sometimes, try recursive backfilling
		let unsolvedVariables = Object.keys(this.variablesToEquations).filter(
			(n) => !Object.keys(this.solvedVariables).includes(n)
		);
		for (const unsVar in unsolvedVariables) {
			try {
				let unsolvedEq = this.equations[this.variablesToEquations[unsolvedVariables[unsVar]]];
				let varsInUnsolvedEq =
					this.equationsToVariables[this.variablesToEquations[unsolvedVariables[unsVar]]];
				for (let solvedVar in this.solvedVariables) {
					unsolvedEq = unsolvedEq.replace(solvedVar, this.solvedVariables[solvedVar]);
				}
				let mx = nerdamer(unsolvedEq).evaluate().toDecimal().split('=')[1];
				this.solvedVariables[unsolvedVariables[unsVar]] = eval(mx);
			} catch (error) {
				continue;
			}
		}
	}

	addEquation(uuid, equation) {
		this.equations[uuid] = equation;
		let a = this.ce.parse(equation).canonical.json;
		this.equationsToVariables[uuid] = [];
		this.solvedVariables = {};
		this.subParser(uuid, a);
		this.filterStores(uuid);
		try {
			this.solveVariables(this.equations);
		} catch (error) {
			this.recursiveSolve(this.equations);
		}

		return a;
	}
}

const oversear = new Oversear();

export default oversear;
