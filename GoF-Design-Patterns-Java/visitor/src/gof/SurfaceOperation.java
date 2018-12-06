package gof;


public class SurfaceOperation implements Operation
{

	public double calculer(Rectangle r)
	{
		int s = r.getLargeur()*r.getLongueur();
		System.out.println("Surface rectangle : "+s);
		return s;
	}

	public double calculer(Cercle c)
	{
		double s = c.getRayon()*c.getRayon()*Math.PI;
		System.out.println("Surface cercle : "+s);
		return s;
	}

}
