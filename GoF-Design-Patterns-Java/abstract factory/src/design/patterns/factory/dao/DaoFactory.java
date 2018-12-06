package design.patterns.factory.dao;

import design.patterns.factory.dao.hibernate.HibernateDaoFactory;
import design.patterns.factory.dao.jdbc.JdbcDaoFactory;
import design.patterns.factory.dao.test.TestDaoFactory;

public class DaoFactory {
	public static AbstractDaoFactory getFactory(String cle)
	{
		if(cle.equals("test"))
			return new TestDaoFactory();
		if(cle.equals("jdbc"))
			return new JdbcDaoFactory();
		if(cle.equals("hibernate"))
			return new HibernateDaoFactory();
		return null;
	}
}
