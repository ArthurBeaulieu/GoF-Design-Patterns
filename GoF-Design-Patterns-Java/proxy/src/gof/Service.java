package gof;

public class Service implements IService
{
	private String name="service";
	public void executer()
	{
		System.out.println(">> Méthode 'executer()'");
	}

	public String getName()
	{
		// TODO Auto-generated method stub
		return this.name;
	}

	public void setName(String name)
	{
		// TODO Auto-generated method stub
		this.name = name;
	}
}
