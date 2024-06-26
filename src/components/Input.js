import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import  {Colors}  from '../constants';

const Input = ({
  width = '100%', 
  label ="yazı",
  iconName= "search1" ,
  error ,
  password,
  onFocus = () => {},
  iconType = 'AntDesign', 
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);


  const IconComponent = () => {
    switch (iconType) {
      case 'AntDesign':
        return <AntIcon name={iconName} style={style.iconStyle} />;
      case 'FontAwesome':
        return <FontAwesomeIcon name={iconName} style={style.iconStyle} />;
      default:
        return <Icon name={iconName} style={style.iconStyle} />;
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Colors.red
              : isFocused
              ? Colors.darkBlue
              : Colors.light,
            alignItems: 'center',
            width: width, 
          },
        ]}
      >
        <IconComponent /> 
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: Colors.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ color: Colors.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: Colors.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.light,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },iconStyle:{ color: Colors.darkBlue, fontSize: 22, marginRight: 10 }
});

export default Input;
