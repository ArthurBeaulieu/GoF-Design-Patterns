package gof;

public class IterateurTableauString implements Iterateur 
{
	private TableauString tableau = null;
	private int index = 0;
	
	public IterateurTableauString(TableauString tableau)
	{
		this.tableau = tableau;
	}
	public boolean hasNext()
	{
		if(index>=tableau.getTableau().length || tableau.getTableau()[index]==null)
			return false;
		return true;
	}

	public Object next()
	{
		String item = tableau.getTableau()[index];
		index++;
		return item;
	}

}
