package gof.command.telecommande;



public class CommandeAllumerLampe implements Commande {
	private Lampe lampe;
	public CommandeAllumerLampe(Lampe lampe)
	{
		this.lampe = lampe;
	}
	@Override
	public void executer() {
		lampe.allumer();
	}

}
