package gof.command.distributeur;


public class DistribuerBonbonsCommande implements Command {

	public void executer() {
		// TODO Auto-generated method stub
		this.bonbon.fabriquer();
		System.out.println("Distribution d'un paquet de bonbons");
	}

	/**
	 * @uml.property  name="bonbon"
	 * @uml.associationEnd  multiplicity="(1 1)" inverse="distribuerBonbonsCommande:command.Bonbon"
	 */
	private Bonbon bonbon = null;

		
		/**
		 */
		public DistribuerBonbonsCommande(Bonbon bonbon){
			this.bonbon = bonbon;
		}

}
