package ex1;

public class TesteCompeticao {
    public static void main(String[] args) {
        Competicao c1 = new Competicao();
        int qtd = c1.qtdAtletas();
        String[] nomes = c1.nomeAtletas(qtd);
        float[][] saltos = c1.saltosAtletas(nomes);
        float[] maiorSalto = c1.maiorSalto(nomes, saltos);
        float[] mediaSaltos = c1.mediaSaltos(nomes, saltos);
        String nomeVencedor = c1.nomeVencedor(nomes, maiorSalto);
        c1.resultadoFinal(nomes, saltos, mediaSaltos, nomeVencedor);
    }
}
