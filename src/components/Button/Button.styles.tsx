import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity(() => ({
  padding: 10,
  backgroundColor: '#FDD95C',
  borderRadius: 4,
  width: '50%',
  position: 'absolute',
  bottom: 20,
}));

export const Title = styled.Text(() => ({
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
}));
