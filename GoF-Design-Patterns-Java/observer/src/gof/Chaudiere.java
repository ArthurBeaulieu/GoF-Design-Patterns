package gof;


public class Chaudiere implements Observateur {

	private int consigne = 20;
	
	public void actualiser(Observable s) {
		// TODO Auto-generated method stub
		if(s.getMesure()<consigne)
			System.out.println("CHAUDIERE : MARCHE");
		else
			System.out.println("CHAUDIERE : ARRET");
	}

}
