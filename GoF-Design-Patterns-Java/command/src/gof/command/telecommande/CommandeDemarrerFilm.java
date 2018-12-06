package gof.command.telecommande;



public class CommandeDemarrerFilm implements Commande {
	private LecteurDVD dvd;
	public CommandeDemarrerFilm(LecteurDVD dvd)
	{
		this.dvd = dvd;
	}
	@Override
	public void executer() {
		dvd.demarrer();
	}

}
