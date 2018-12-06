package gof.command.telecommande;



public class CommandeEteindreLampe implements Commande {
	private Lampe lampe;
	public CommandeEteindreLampe(Lampe lampe)
	{
		this.lampe = lampe;
	}
	@Override
	public void executer() {
		lampe.eteindre();
	}

}
