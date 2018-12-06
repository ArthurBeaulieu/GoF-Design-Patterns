package gof.command.distributeur;


public class DistribuerBiscuitsCommande implements Command{
	
	

	public void executer() {
		this.paquetBiscuits.empaqueter();
		System.out.println("Distribution d'un paquet de biscuits");
		
	}

	/**
	 * @uml.property  name="paquetBiscuits"
	 * @uml.associationEnd  multiplicity="(1 1)" inverse="distribuerBiscuitsCommande:command.PaquetBiscuits"
	 */
	private PaquetBiscuits paquetBiscuits = null;

		
		/**
		 */
		public DistribuerBiscuitsCommande(PaquetBiscuits biscuits){
		this.paquetBiscuits = biscuits;
		}
		
		

}
