package gof.command.distributeur;

public class TestCommand {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Telecommande tele = new Telecommande(3);
		
		tele.setCommand(new DistribuerBiscuitsCommande(new PaquetBiscuits()),0);
		tele.setCommand(new DistribuerBonbonsCommande(new Bonbon()),1);
		tele.setCommand(new DistribuerBouteilleEauCommande(new Bouteille()),2);
		
		tele.appuiTouche(0);
		tele.appuiTouche(1);
		tele.appuiTouche(2);
		

	}

}
