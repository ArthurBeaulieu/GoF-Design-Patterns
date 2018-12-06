package gof;

public class OperateurMoins extends Operateur
{

	public OperateurMoins()
	{
		super("-");
	}


	@Override
	public int calculer(Expression op1, Expression op2)
	{
		return op1.evaluer()-op2.evaluer();
	}

}
