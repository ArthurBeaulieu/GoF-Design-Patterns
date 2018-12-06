package gof;

public class ExpressionBinaire extends Expression
{
	Expression op1,op2;
	Operateur operateur;
	
	public ExpressionBinaire(Expression op1, Expression op2, Operateur op)
	{
		this.op1 = op1;
		this.op2 = op2;
		this.operateur = op;
	}
	@Override
	public int evaluer()
	{
		return operateur.calculer(op1,op2);
	}
	
	public String toString()
	{
		return op1+" "+operateur+" "+op2;
	}

}
