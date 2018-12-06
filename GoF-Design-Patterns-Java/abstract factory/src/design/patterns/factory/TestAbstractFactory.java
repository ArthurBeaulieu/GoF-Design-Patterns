package design.patterns.factory;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.dao.DaoFactory;
import design.patterns.factory.dao.AbstractDaoFactory;
import design.patterns.factory.metier.Contact;

public class TestAbstractFactory {

	/**
	 * @param args
	 * @throws ClassNotFoundException 
	 * @throws IllegalAccessException 
	 * @throws InstantiationException 
	 * @throws IOException 
	 */
	public static void main(String[] args) throws InstantiationException, IllegalAccessException, ClassNotFoundException, IOException {
//		String cle = "test";
//		AbstractDaoFactory factory = DaoFactory.getFactory(cle);
		BufferedReader br = new BufferedReader(new FileReader("appli.conf"));
		String line = br.readLine();
		AbstractDaoFactory factory = (AbstractDaoFactory) Class.forName(line).newInstance();
		ContactDAO contactDao = factory.getContactDAO();
		List<Contact> contacts = contactDao.getAllContacts();
		for(Contact c : contacts)
			System.out.println(c);

	}

}
