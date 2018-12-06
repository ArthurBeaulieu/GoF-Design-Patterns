package gof.command.telecommande;

public class Telecommande {
	private Commande[] commandes = new Commande[2];
	
	public void affecterCommande(Commande commande, int bouton)
	{
		commandes[bouton] = commande;
	}
	
	public void on()
	{
		commandes[0].executer();
	}
	
	public void off()
	{
		commandes[1].executer();
	}
}
