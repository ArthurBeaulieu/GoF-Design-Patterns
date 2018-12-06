package gof;

public class Main
{
	public static void main(String[] args)
	{
		
		IService s = ServiceFactory.create(ServiceFactory.PROXY_LOG);
		s.executer();
		s.setName("Mon service");
		System.out.println(s.getName());
	}
}
