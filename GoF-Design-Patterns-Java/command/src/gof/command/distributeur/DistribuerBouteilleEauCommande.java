package gof.command.distributeur;


public class DistribuerBouteilleEauCommande implements Command {

	public void executer() {
		// TODO Auto-generated method stub
		bouteille.remplir();
		System.out.println("Distribution d'une boutille");
	}

	/**
	 * @uml.property  name="bouteille"
	 * @uml.associationEnd  multiplicity="(1 1)" inverse="distribuerBouteilleEauCommande:command.Bouteille"
	 */
	private Bouteille bouteille = null;

		
		/**
		 */
		public DistribuerBouteilleEauCommande(Bouteille bouteille){
			this.bouteille = bouteille;
		}

}
