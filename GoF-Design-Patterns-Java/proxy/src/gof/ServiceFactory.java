package gof;

import java.lang.reflect.Proxy;
import java.lang.reflect.InvocationHandler;

public class ServiceFactory
{
	public static final int SANS_PROXY = 1;
	public static final int PROXY_LOG = SANS_PROXY + 1;
	public static final int PROXY_AUTH = SANS_PROXY + 2;
	
	public static IService create(int typeProxy)
	{
		IService service=new Service();
		InvocationHandler handler = null;
		switch(typeProxy)
		{
		case SANS_PROXY:
			service = service;
			break;
		case PROXY_LOG:
			handler = new LoggerProxyHandler(service);
			service = (IService) Proxy.newProxyInstance(IService.class.getClassLoader(),
					new Class[]
					{ IService.class }, handler);
			break;
		case PROXY_AUTH:
			handler = new AuthProxyHandler(service);
			service = (IService) Proxy.newProxyInstance(IService.class.getClassLoader(),
					new Class[]
					{ IService.class }, handler);
			break;
		}
		return service;
	}
	
}
