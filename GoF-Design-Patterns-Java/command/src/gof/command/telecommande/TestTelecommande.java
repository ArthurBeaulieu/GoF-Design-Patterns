package gof.command.telecommande;

public class TestTelecommande {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Lampe lampe = new Lampe();
		LecteurDVD dvd = new LecteurDVD();
		Telecommande telecommande = new Telecommande();
		
		telecommande.affecterCommande(new CommandeAllumerLampe(lampe), 0);
		telecommande.affecterCommande(new CommandeEteindreLampe(lampe), 1);
		
		telecommande.on();
		telecommande.off();

	}

}
