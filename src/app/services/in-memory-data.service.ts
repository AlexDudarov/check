import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from '../entity/request-info';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const statistic = [
      new RequestInfo( 1, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
        ),
      new RequestInfo(2, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(3, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(4, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(5, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(6, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(7, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(8, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),  new RequestInfo(9, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      ),
      new RequestInfo(10, 'AAA', 'aaa', '123123', 123,  '22.09.2017',
        2, 'Четкий', 100, 2,
        'TERRORIST', '', 'Пупкин', '12.05.1990', 'BELARUS',
        'MR123956', 'BELARUS', 'LONDON is a capital of greatBritan',
        [{name: 'Вася Пупкин', categories: 'Terrorizm'}],
      )
    ];
 return {statistic};
  }
}
