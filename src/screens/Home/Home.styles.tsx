import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View(() => ({
  flex: 1,
  backgroundColor: '#6CB4F6',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ContainerTemperature = styled.View(() => ({
  flexDirection: 'row',
  justifyContent: 'center',
}));

export const Title = styled.Text(() => ({
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
}));

export const DescriptionText = styled.Text(() => ({
  marginTop: 30,
  fontSize: 20,
  fontWeight: 'bold',
  color: '#C8DCF2',
  textAlign: 'center',
}));

export const CaptionText = styled.Text(() => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: '#C8DCF2',
  textAlign: 'center',
}));

export const TemperatureText = styled.Text(() => ({
  fontSize: 60,
  fontWeight: 'bold',
  color: '#C8DCF2',
  textAlign: 'center',
}));

export const Icon = styled.Image(() => ({
  width: 150,
  height: 100,
}));

export const IconContainer = styled.View(() => ({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
}));
