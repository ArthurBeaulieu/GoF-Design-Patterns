package gof;

public class Nombre extends Expression
{

	private int nb;
	
	public Nombre(int nb)
	{
		this.nb = nb;
	}
	
	@Override
	public int evaluer()
	{
		return nb;
	}
	
	public void setValue(int nb)
	{
		this.nb = nb;
	}
	
	public String toString()
	{
		return String.valueOf(this.nb);
	}

}
