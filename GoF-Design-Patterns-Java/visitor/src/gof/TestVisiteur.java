package gof;

public class TestVisiteur
{

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		Rectangle r1 = new Rectangle(2,6);
		Rectangle r2 = new Rectangle(2,5);
		
		Operation operation = new PerimetreOperation();
		
		r1.doOperation(operation);
		r2.doOperation(operation);
		

	}

}
