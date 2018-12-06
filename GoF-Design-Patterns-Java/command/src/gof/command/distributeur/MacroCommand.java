package gof.command.distributeur;

import java.util.*;


public class MacroCommand implements Command
{

	private Vector<Command> commandes = new Vector<Command>();
	
	public void addCommande(Command commande)
	{
		commandes.add(commande);
	}
	public void executer()
	{
		for(Command commande : commandes)
			commande.executer();
	}

}
