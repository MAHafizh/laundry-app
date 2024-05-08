// /* eslint-disable react/no-unstable-nested-components */
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import {
//   IconFormalShirt,
//   IconJeans,
//   IconOuter,
//   IconPants,
//   IconTShirt,
//   IconUnderwear,
//   IconPlus,
//   IconMinus,
// } from '../../assets';
// import {WARNA_SEKUNDER} from '../../utils/constant';

// const ItemsContainer = ({title}) => {
//   const Icon = () => {
//     if (title === 'Formal Shirt') {
//       return <IconFormalShirt />;
//     }
//     if (title === 'T-Shirt') {
//       return <IconTShirt />;
//     }
//     if (title === 'Outer') {
//       return <IconOuter />;
//     }
//     if (title === 'Jeans') {
//       return <IconJeans />;
//     }
//     if (title === 'Pants') {
//       return <IconPants />;
//     }
//     if (title === 'Underwear') {
//       return <IconUnderwear />;
//     }
//     return <IconFormalShirt />;
//   };

//   const [valueShirt, setValueShirt] = useState(0);
//   const [valueTShirt, setValueTShirt] = useState(0);
//   const [valueOuter, setValueOuter] = useState(0);
//   const [valuePants, setValuePants] = useState(0);
//   const [valueJeans, setValueJeans] = useState(0);
//   const [valueUnderwear, setValueUnderwear] = useState(0);

//   const handleAddShirt = action => {
//     if (action === 'plus') {
//       setValueShirt(valueShirt + 1);
//     } else if (action === 'minus') {
//       setValueShirt(valueShirt - 1);
//     }
//   };
//   const handleAddTShirt = action => {
//     if (action === 'plus') {
//       setValueTShirt(valueTShirt + 1);
//     } else if (action === 'minus') {
//       setValueTShirt(valueTShirt - 1);
//     }
//   };
//   const handleAddOuter = action => {
//     if (action === 'plus') {
//       setValueOuter(valueOuter + 1);
//     } else if (action === 'minus') {
//       setValueOuter(valueOuter - 1);
//     }
//   };
//   const handleAddPants = action => {
//     if (action === 'plus') {
//       setValuePants(valuePants + 1);
//     } else if (action === 'minus') {
//       setValuePants(valuePants - 1);
//     }
//   };
//   const handleAddJeans = action => {
//     if (action === 'plus') {
//       setValueJeans(valueJeans + 1);
//     } else if (action === 'minus') {
//       setValueJeans(valueJeans - 1);
//     }
//   };
//   const handleAddUnderwear = action => {
//     if (action === 'plus') {
//       setValueUnderwear(valueUnderwear + 1);
//     } else if (action === 'minus') {
//       setValueUnderwear(valueUnderwear - 1);
//     }
//   };

//   let handleAdd, value;
//   if (title === 'Formal Shirt') {
//     handleAdd = handleAddShirt;
//     value = valueShirt;
//   } else if (title === 'T-Shirt') {
//     handleAdd = handleAddTShirt;
//     value = valueTShirt;
//   } else if (title === 'Outer') {
//     handleAdd = handleAddOuter;
//     value = valueOuter;
//   } else if (title === 'Jeans') {
//     handleAdd = handleAddJeans;
//     value = valueJeans;
//   } else if (title === 'Pants') {
//     handleAdd = handleAddPants;
//     value = valuePants;
//   } else if (title === 'Underwear') {
//     handleAdd = handleAddUnderwear;
//     value = valueUnderwear;
//   }

// console.log('===========');
// console.log('Formal Shirt', values['Formal Shirt']);
// console.log('T-Shirt', values['T-Shirt']);
// console.log('Outer', values.Outer);
// console.log('Pants', values.Pants);
// console.log('Jeans', values.Jeans);
// console.log('Underwear', values.Underwear);
// console.log('===========');

//   return (
//     <View style={styles.container}>
//       <View style={styles.icon}>
//         <Icon />
//       </View>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.actionContainer}>
//         <TouchableOpacity
//           onPress={() => handleAdd('minus')}
//           disabled={value === 0}>
//           <View style={styles.iconAction}>
//             <IconMinus />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.textAction}>{value}</Text>
//         <TouchableOpacity onPress={() => handleAdd('plus')}>
//           <View style={styles.iconAction}>
//             <IconPlus />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ItemsContainer;

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 10,
//     height: 64,
//     width: '100%',
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 6.68,
//     elevation: 11,
//     alignItems: 'center',
//   },
//   icon: {
//     marginHorizontal: 20,
//   },
//   title: {
//     fontFamily: 'TitilliumWeb-Bold',
//     fontSize: 18,
//     color: 'black',
//     width: 97,
//   },
//   actionContainer: {
//     backgroundColor: WARNA_SEKUNDER,
//     width: 60,
//     height: 24,
//     borderRadius: 10,
//     paddingHorizontal: 6,
//     paddingVertical: 6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 55,
//   },
//   textAction: {
//     marginTop: -5.5,
//     fontFamily: 'TitilliumWeb-Bold',
//     fontSize: 14,
//     color: 'black',
//   },
// });
