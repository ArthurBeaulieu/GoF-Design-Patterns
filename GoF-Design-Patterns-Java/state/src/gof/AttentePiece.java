package gof;

public class AttentePiece implements EtatPhotomaton {

    private Photomaton gp;
    private String message = "Pas de piece dans le monnayeur";

    AttentePiece(Photomaton gp) {
        this.gp = gp;
    }

    public void insererPiece() {
        System.out.println(
                "Selectionnez une photo");
        gp.setEtatCourant(gp.getEtatAttenteChoix());
 
    }

    public void recupererPiece() {

    }

    public void modeIdentite() {

    }

    public void modePortait() {

    }

	@Override
	public void recupererPhoto() {

		
	}
}
