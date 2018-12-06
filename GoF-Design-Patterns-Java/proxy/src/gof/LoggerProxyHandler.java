package gof;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class LoggerProxyHandler implements InvocationHandler
{
	Object subject;

	public LoggerProxyHandler(Object subject)
	{
		this.subject = subject;
	}

	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable
	{
		Logger ctx = new Logger();
		System.out.println(">>> "+method.getName());
		ctx.debutLog();
		Object returnValue = method.invoke(subject, args);
		ctx.finLog();
		return returnValue;
	}
}
