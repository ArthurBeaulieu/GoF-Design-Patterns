package gof;


public class PerimetreOperation implements Operation
{

	public double calculer(Rectangle r)
	{
		int resultat = (r.getLargeur()+r.getLongueur())*2;
		System.out.println("Périmètre rectangle : "+resultat);
		return resultat;

	}

	public double calculer(Cercle c)
	{
		double resultat = 2 * c.getRayon() * Math.PI;
		System.out.println("Périmètre cercle : "+resultat);
		return resultat;
	}



}
