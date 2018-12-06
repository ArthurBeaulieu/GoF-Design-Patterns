package gof;

public class OperateurPlus extends Operateur
{

	public OperateurPlus()
	{
		super("+");
	}

	public int calculer(Expression op1, Expression op2)
	{
		return op1.evaluer()+op2.evaluer();
	}

}
