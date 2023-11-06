package ex1;

import java.util.Scanner;
public class Competicao {
    public int qtdAtletas() {
        Scanner input = new Scanner(System.in);
        System.out.println("--- NOVA COMPETIÇÃO ---");
        System.out.print("Digite a quantidade de participantes: ");
        int qtd = input.nextInt();
        return qtd;
    }

    public String[] nomeAtletas(int qtd) {
        String[] vetorAtletas = new String[qtd];
        Scanner input = new Scanner(System.in);

        for(int i=0; i<vetorAtletas.length; i++) {
            System.out.printf("Digite o nome do %dº atleta: ", i+1);
            vetorAtletas[i] = input.nextLine();

            if(vetorAtletas[i].isBlank()) {
                System.out.println("Encerrando o programa");
                System.exit(0);
            }
        }
        return vetorAtletas;
    }

    public float [][] saltosAtletas(String[] nomes) {
        Scanner input = new Scanner(System.in);
        int qtdDeAtletas = nomes.length;
        int qtdDeSaltos = 5;

        float[][] matrizSaltos = new float[qtdDeAtletas][qtdDeSaltos];
        for(int i=0; i<matrizSaltos.length; i++) {
            System.out.printf("--- Atleta %s ---%n", nomes[i]);
            for(int j=0; j<matrizSaltos[i].length; j++) {
                System.out.printf("Digite o %dº salto: ", j+1);
                matrizSaltos[i][j] = input.nextFloat();
            }
        }
        return matrizSaltos;
    }

    public float[] mediaSaltos(String[] nome, float[][] saltos) {
        int tam = nome.length;
        int qtdSaltos = 5;

        float[] resultadoMedia = new float[tam];

        for(int i=0; i<saltos.length; i++) {
            int soma = 0;
            for(int j=0; j<saltos[i].length; j++) {
                soma += saltos[i][j];
            }

            float result = (float) soma / qtdSaltos;
            resultadoMedia[i] = result;
        }
        return resultadoMedia;
    }

    public float[] maiorSalto(String[] nomes, float[][] saltos) {
        int tam = nomes.length;
        float[] maiorSalto = new float[tam];

        for(int i=0; i<saltos.length; i++) {
            float maior = 0;
            for(int j=0; j<saltos[i].length; j++) {
                if(saltos[i][j] > maior) {
                    maior = saltos[i][j];
                }
            }
            maiorSalto[i] = maior;
        }
        return maiorSalto;
    }

    public String nomeVencedor(String[] nomes, float[] maiorSalto) {
        String nomeVencedor = "";
        float maior = 0;
        int index = 0;

        for(int i=0; i<nomes.length; i++) {
            if(i == 0) {
                maior = maiorSalto[i];
            } else if(maiorSalto[i] > maior) {
                maior = maiorSalto[i];
                index = i;
            }
            nomeVencedor = nomes[index];
        }
        return nomeVencedor;
    }

    /*
    public String maiorMedia(String[] nomes, float[]mediaSaltos) {
        String nomeVencedor = "";
        float vencedor = 0;
        int index = 0;

        for(int i=0; i<mediaSaltos.length; i++) {
            if(i == 0) {
                vencedor = mediaSaltos[i];
            } else {
                if(mediaSaltos[i] > vencedor) {
                    index = i;
                }
            }
            nomeVencedor = nomes[index];
        }
        return nomeVencedor;
    }
     */

    public void resultadoFinal(String[] nome, float[][] saltos, float[]mediaSaltos, String nomeVencedor) {
        System.out.println("Resultado Final: ");
        for(int i=0; i<nome.length; i++) {
            System.out.printf("Atleta: %s %n", nome[i]);
            System.out.print("Saltos: ");
            for(int j=0; j<saltos[i].length; j++) {
                if(j == saltos[i].length - 1) {
                    System.out.printf("%.1f%n", saltos[i][j]);
                } else {
                    System.out.printf("%.1f - ", saltos[i][j]);
                }
            }
            System.out.printf("Média dos saltos: %.1fm %n%n", mediaSaltos[i]);
        }
        System.out.printf("O vencedor da competição foi %s", nomeVencedor);
    }

}