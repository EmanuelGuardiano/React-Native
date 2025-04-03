import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={
      <IconSymbol
        size={270}
        color="#808080"
        name="chevron.left.forwardslash.chevron.right"
        style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saiba mais sobre as materias</ThemedText>
      </ThemedView>
      
      <Collapsible title="Programação Web II">
        <ThemedText>
          Aqui você aprende mais sobre como fazer sites usando php e banco de dados.
        </ThemedText>
        <ThemedText>
          Se quiser se aprofundar clique em
        </ThemedText>
        <ExternalLink href="https://www.hostinger.com.br/tutoriais/o-que-e-php-guia-basico">
          <ThemedText type="link">Saiba Mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Analise de Sistema">
        <ThemedText>
          Em Analise de Sistema você aprender a compreender mais sobre o criamento de sites desde o inicio em saber oq o cliente quer até a entrega do site.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Desenvolvimento de Jogos">
        <ThemedText>
          Nessa materia você aprende a criar jogos e sprits mais focados em jogos 2D.
        </ThemedText>
        <ThemedText>
          Saiba mais sobre a ferramenta usando abaixo.
        </ThemedText>
        <ExternalLink href="https://www.construct.net/en">
          <ThemedText type="link">Saiba Mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Desenvolvimento de Sistema II">
        <ThemedText>
         Aqui a o jogo é na linguagem java usando o Apache Netbeans.
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Desenvolvimento Mobile">
        <ThemedText>
          Como o nome ja disse é a criação de aplicatimos multiplataformas usando React Native.
        </ThemedText>
        <ThemedText><img width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="desktop-computer"/></ThemedText>
        
      </Collapsible>
      <Collapsible title="Sistema Embarcados">
        <ThemedText>
        Você aprende a como mexer e manipular arduino.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
