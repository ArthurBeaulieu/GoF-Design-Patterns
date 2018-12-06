package gof;

public class TableauString implements ListeAbstraite 
{
	private String[] tableau = null;
	private int index = 0;

	public TableauString(int nbElements)
	{
		tableau = new String[nbElements];
	}
	public TableauString()
	{
		this(10);
	}
	public Iterateur getIterateur()
	{
		return new IterateurTableauString(this);
	}
	
	public void add(Object obj)
	{
		if(index<=tableau.length)
		{
			tableau[index] = (String) obj;
			index++;
		}
	}
	
	protected String[] getTableau()
	{
		return this.tableau;
	}
	
	

}
