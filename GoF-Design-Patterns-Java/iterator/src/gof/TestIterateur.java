package gof;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class TestIterateur
{

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		TableauConcret<Integer> concret = new TableauConcret<>();
		
		TableauString tab = new TableauString(3);
		tab.add("Bonjour");
		tab.add("tout");
		tab.add("le monde");
		
		Iterateur it = tab.getIterateur();
		while(it.hasNext())
			System.out.println((String)it.next());

		
		BufferedReader br = new BufferedReader(new  InputStreamReader(System.in));
	}

}
