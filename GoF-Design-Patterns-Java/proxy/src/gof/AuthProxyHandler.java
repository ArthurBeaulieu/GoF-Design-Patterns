package gof;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class AuthProxyHandler implements InvocationHandler
{
	Object subject;

	public AuthProxyHandler(Object subject)
	{
		this.subject = subject;
	}

	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable
	{
		Object returnValue = null;
		if(method.getName().substring(0, 3).equals("set"))
		{
			throw new IllegalAccessException();
		}
		else
		{
			returnValue = method.invoke(subject, args);
		}

		return returnValue;
	}
}
