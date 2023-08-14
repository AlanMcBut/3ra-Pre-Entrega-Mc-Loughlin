// POKEDEX
// Aqui esta la informacion de todos los pokemon disponibles para el juego
// En total son 151

class pokemon {
    constructor(id, nombre, tipo1, tipo2){
        this.id = id
        this.nombre = nombre
        this.tipo1 = tipo1
        this.tipo2 = tipo2
    }
}

const listaPokemon = [
    new pokemon (1, 'bulbasaur', 'veneno','-'),
    new pokemon (2, 'ivysaur','planta', 'veneno'),
    new pokemon (3, 'venusaur', 'planta', 'veneno'),
    new pokemon (4, 'charmander', 'fuego', 'none'),
    new pokemon (5, 'charmeleon', 'fuego', 'none'),
    new pokemon (6, 'charizard', 'fuego', 'volador'),
    new pokemon (7, 'squirtle', 'agua', 'none'),
    new pokemon (8, 'wartortle', 'agua', 'none'),
    new pokemon (9, 'blastoise', 'agua', 'none'),
    new pokemon (10, 'caterpie', 'bicho', 'none'),
    new pokemon (11, 'metapod', 'bicho', 'none'),
    new pokemon (12, 'butterfree', 'bicho', 'volador'),
    new pokemon (13, 'weedle', 'bicho', 'veneno'),
    new pokemon (14, 'kakuna', 'bicho', 'veneno'),
    new pokemon (15, 'beedrill', 'bicho', 'veneno'),
    new pokemon (16, 'pidgey', 'normal', 'volador'),
    new pokemon (17, 'pidgeotto', 'normal', 'volador'),
    new pokemon (18, 'pidgeot', 'normal', 'volador'),
    new pokemon (19, 'rattata', 'normal', 'none'),
    new pokemon (20, 'raticate', 'normal', 'none'),
    new pokemon (21, 'spearow', 'normal', 'volador'),
    new pokemon (22, 'fearow', 'normal', 'volador'),
    new pokemon (23, 'ekans', 'veneno', 'none'),
    new pokemon (24, 'arbok', 'veneno', 'none'),
    new pokemon (25, 'pikachu', 'electrico', 'none'),
    new pokemon (26, 'raichu', 'electrico', 'none'),
    new pokemon (27, 'sandshrew', 'tierra', 'none'),
    new pokemon (28, 'sandslash', 'tierra', 'none'),
    new pokemon (29, 'nidoranf', 'veneno', 'none'),
    new pokemon (30, 'nidorina', 'veneno', 'none'),
    new pokemon (31, 'nidoqueen', 'veneno', 'tierra'),
    new pokemon (32, 'nidoranh', 'veneno', 'none'),
    new pokemon (33, 'nidorino', 'veneno', 'none'),
    new pokemon (34, 'nidoking', 'veneno', 'tierra'),
    new pokemon (35, 'clefairy', 'hada', 'none'),
    new pokemon (36, 'clefable', 'hada', 'none'),
    new pokemon (37, 'vulpix', 'fuego', 'none'),
    new pokemon (38, 'ninetails', 'fuego', 'none'),
    new pokemon (39, 'jigglypuff', 'normal', 'hada'),
    new pokemon (40, 'wigglytuff', 'normal', 'hada'),
    new pokemon (41, 'zubat', 'veneno', 'volador'),
    new pokemon (42, 'golbat', 'veneno', 'volador'),
    new pokemon (43, 'oddish', 'planta', 'veneno'),
    new pokemon (44, 'gloom', 'planta', 'veneno'),
    new pokemon (45, 'vileplume', 'planta', 'veneno'),
    new pokemon (46, 'paras', 'bicho', 'planta'),
    new pokemon (47, 'parasect', 'bicho', 'planta'),
    new pokemon (48, 'venonat', 'bicho', 'veneno'),
    new pokemon (49, 'venomoth', 'bicho', 'veneno'),
    new pokemon (50, 'diglett', 'tierra', 'none'),
    new pokemon (51, 'dugtrio', 'tierra', 'none'),
    new pokemon (52, 'meowth', 'normal', 'none'),
    new pokemon (53, 'persian', 'normal', 'none'),
    new pokemon (54, 'psyduck', 'agua', 'none'),
    new pokemon (55, 'golduck', 'agua', 'none'),
    new pokemon (56, 'mankey', 'pelea', 'none'),
    new pokemon (57, 'primeape', 'pelea', 'none'),
    new pokemon (58, 'growlithe', 'fuego', 'none'),
    new pokemon (59, 'arcanine', 'fuego', 'none'),
    new pokemon (60, 'poliwag', 'agua', 'none'),
    new pokemon (61, 'poliwhirl', 'agua', 'none'),
    new pokemon (62, 'poliwrath', 'agua', 'lucha'),
    new pokemon (63, 'abra', 'psiquico', 'none'),
    new pokemon (64, 'kadabra', 'psiquico', 'none'),
    new pokemon (65, 'alakazam', 'psiquico', 'none'),
    new pokemon (66, 'machop', 'lucha', 'none'),
    new pokemon (67, 'machoke', 'lucha', 'none'),
    new pokemon (68, 'machamp', 'lucha', 'none'),
    new pokemon (69, 'bellsprout', 'planta', 'veneno'),
    new pokemon (70, 'weepinbell', 'planta', 'veneno'),
    new pokemon (71, 'victreebell', 'planta', 'veneno'),
    new pokemon (72, 'tentacool', 'agua', 'veneno'),
    new pokemon (73, 'tentacruel', 'agua', 'veneno'),
    new pokemon (74, 'geodude', 'roca', 'tierra'),
    new pokemon (75, 'graveler', 'roca', 'tierra'),
    new pokemon (76, 'golem', 'roca', 'tierra'),
    new pokemon (77, 'ponyta', 'fuego', 'none'),
    new pokemon (78, 'rapidash', 'fuego', 'none'),
    new pokemon (79, 'slowpoke', 'agua', 'psiquico'),
    new pokemon (80, 'slowbro', 'agua', 'psiquico'),
    new pokemon (81, 'magnemite', 'electrico', 'acero'),
    new pokemon (82, 'magneton', 'electrico', 'acero'),
    new pokemon (83, 'farfetchd', 'normal', 'volador'),
    new pokemon (84, 'doduo', 'normal', 'volador'),
    new pokemon (85, 'dodrio', 'normal', 'volador'),
    new pokemon (86, 'seel', 'agua', 'none'),
    new pokemon (87, 'dewong', 'agua', 'hielo'),
    new pokemon (88, 'grimer', 'veneno', 'none'),
    new pokemon (89, 'muk', 'veneno', 'none'),
    new pokemon (90, 'shellder', 'agua', 'none'),
    new pokemon (91, 'cloyster', 'agua', 'hielo'),
    new pokemon (92, 'gastly', 'fantasma', 'veneno'),
    new pokemon (93, 'haunter', 'fantasma', 'veneno'),
    new pokemon (94, 'gengar', 'fantasma', 'veneno'),
    new pokemon (95, 'onix', 'roca', 'tierra'),
    new pokemon (96, 'drowzee', 'psiquico', 'none'),
    new pokemon (97, 'hypno', 'psiquico', 'none'),
    new pokemon (98, 'krabby', 'agua', 'none'),
    new pokemon (99, 'kingler', 'agua', 'none'),
    new pokemon (100, 'voltorb', 'electrico', 'none'),
    new pokemon (101, 'electrode', 'electrico', 'none'),
    new pokemon (102, 'exeggcute', 'planta', 'veneno'),
    new pokemon (104, '', 'planta', 'veneno'),
    
];