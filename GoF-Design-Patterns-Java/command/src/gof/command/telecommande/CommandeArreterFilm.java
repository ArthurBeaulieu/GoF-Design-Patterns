package gof.command.telecommande;



public class CommandeArreterFilm implements Commande {
	private LecteurDVD dvd;
	public CommandeArreterFilm(LecteurDVD dvd)
	{
		this.dvd = dvd;
	}
	@Override
	public void executer() {
		dvd.arreter();
	}

}
