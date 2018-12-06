package gof;

public class EtatDeveloppement implements EtatPhotomaton {
	private Photomaton gp;

	public EtatDeveloppement(Photomaton p)
	{
		gp=p;
	}
	public void modeIdentite() {
		// TODO Auto-generated method stub

	}


	public void modePortait() {
		// TODO Auto-generated method stub

	}


	public void recupererPiece() {
		// TODO Auto-generated method stub

	}


	public void insererPiece() {
		// TODO Auto-generated method stub

	}
	@Override
	public void recupererPhoto() {
		System.out.println("R�cup�rer la photo");
		gp.setEtatCourant(gp.getEtatAttentePiece());
		
	}

}
