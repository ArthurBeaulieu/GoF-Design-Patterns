package gof.command.distributeur;


public class Telecommande {

	/**
	 * @uml.property  name="touches"
	 * @uml.associationEnd  multiplicity="(0 -1)" dimension="1" ordering="true" inverse="telecommande:command.Command"
	 */
	private Command[] boutonsCommande;

	/**
	 * Getter of the property <tt>touches</tt>
	 * @return  Returns the touches.
	 * @uml.property  name="touches"
	 */
	public Command getCommand(int numTouche) {
		return boutonsCommande[numTouche];
	}

	/**
	 * Setter of the property <tt>touches</tt>
	 * @param boutonsCommande  The touches to set.
	 * @uml.property  name="touches"
	 */
	public void setCommand(Command commande, int numTouche) {
		this.boutonsCommande[numTouche] = commande;
	}

		
		/**
		 */
		public Telecommande(int nbTouches){
		boutonsCommande = new Command[nbTouches];
		}
		
		public void appuiTouche(int numTouche)
		{
			this.boutonsCommande[numTouche].executer();
		}

}
