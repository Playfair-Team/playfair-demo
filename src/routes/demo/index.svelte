<script>
	import CreateNewCell from '$lib/create-new-cell/CreateNewCell.svelte';
  import TextCell from '$lib/TextCell.svelte';
  import MathCell from '$lib/MathCell.svelte';
  import SidePanel from '$lib/SidePanel.svelte';
  import { cellStore } from '$lib/stores.js';

  $cellStore = [
			{ id:'ba502cb7-3fc3-445a-b125-88d9361902e5', cellType: "TextCell", component: TextCell },
			{ id:'3b764e6b-c23c-4739-84a2-d93dc65f8ad1', cellType: "MathCell", component: MathCell, equations: [{id: '3b764e6b-c23c-4739-84a2-d93dc65f8ad1', cellType: "EqCell"}] }
	];

  // FIXME: TextCell text and EquationCell equations carry over from previous cell on delete

  // TODO: *** Implement PlotCell using https://mauriciopoppe.github.io/function-plot/

  // TODO: *** Notebook title & subtitle

  // TODO: Create account, save notebooks

  // TODO: Export notebook as plain text file
  // TODO: Export notebook as PDF
  // TODO: Export as Latex-, Python-, Matlab-ready
  // TODO: Public notebooks: search, share with link

</script>

<div class="notebook">
  {#each $cellStore as cell }
    <div>
      <svelte:component this={cell.component} cellAttributes={cell}/>
    </div>
  {/each}
  <CreateNewCell />
</div>

<SidePanel />

<style>
  .notebook {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    padding-top: 42px;
  }
</style>