package gof;

public abstract class Operateur extends Expression
{
	private String label;
	
	public Operateur(String label)
	{
		this.label = label;
	}
	@Override
	public int evaluer()
	{
		return 0;
	}
	
	public abstract int calculer(Expression op1, Expression op2);
	public String toString()
	{
		return this.label;
	}
	

}
