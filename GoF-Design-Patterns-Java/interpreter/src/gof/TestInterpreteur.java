package gof;

public class TestInterpreteur
{

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		// TOUTE CETTE PARTIE DEVRAIT NORMALEMENT
		// ETRE FAITE PAR UN PARSER
		Nombre nb1 = new Nombre(2);
		Nombre nb2 = new Nombre(6);
		Operateur op = new OperateurPlus();
		
		Expression exp = new ExpressionBinaire(nb2,nb1,new OperateurMoins());
		Expression e1 = new ExpressionBinaire(nb1,exp,op);
		Expression e2 = new ExpressionBinaire(nb1, nb2, new OperateurMultiplier());
		
		System.out.println(e2+" = "+e2.evaluer());

	}

}
