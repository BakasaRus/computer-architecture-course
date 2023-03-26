(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{276:function(t,v,_){t.exports=_.p+"assets/img/pic1.1.595463eb.png"},293:function(t,v,_){"use strict";_.r(v);var s=_(10),r=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"раздел-1-базовая-эвм"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#раздел-1-базовая-эвм"}},[t._v("#")]),t._v(" Раздел 1. Базовая ЭВМ")]),t._v(" "),v("h2",{attrs:{id:"назначение-базовои-эвм"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#назначение-базовои-эвм"}},[t._v("#")]),t._v(" Назначение базовой ЭВМ")]),t._v(" "),v("p",[t._v("Базовая ЭВМ - это простая гипотетическая машина, обладающая типичными чертами многих конкретных ЭВМ. Знание принципов построения и функционирования этой ЭВМ будет хорошей базой для освоения ЭВМ любых типов и моделей. Естественно, что начинать изучение ЭВМ лучше всего с простых моделей, которые и были выбраны за прототип базовой ЭВМ.")]),t._v(" "),v("h2",{attrs:{id:"структура-базовои-эвм"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#структура-базовои-эвм"}},[t._v("#")]),t._v(" Структура базовой ЭВМ")]),t._v(" "),v("p",[t._v("На рис. 1.1 приведена упрощенная структура базовой ЭВМ. Это одноадресная ЭВМ, работающая с 16-разрядными словами. В ней реализованы два вида адресации: прямая и косвенная.")]),t._v(" "),v("p",[v("img",{attrs:{src:_(276),alt:"Рис. 1.1. Модель базовой ЭВМ"}})]),t._v(" "),v("p",[v("em",[t._v("Рис. 1.1. Модель базовой ЭВМ")])]),t._v(" "),v("p",[t._v("Рассмотрим составные части базовой ЭВМ, не касаясь пока устройств ввода-вывода (УВВ) и пульта управления (ПУ).")]),t._v(" "),v("p",[v("strong",[t._v("Память")]),t._v(" состоит из 2048 ячеек (16-битовых) с адресами 0,1,...,2046,2047.Восемь ячеек памяти с адресами 008,...,00F несколько отличаются от остальных. Эти ячейки называются индексными и их лучше использовать в циклических программах (п. 1.5).")]),t._v(" "),v("p",[v("strong",[t._v("Процессор")]),t._v(" состоит из ряда регистров, арифметическо-логического устройства и устройства управления.")]),t._v(" "),v("p",[v("strong",[t._v("Счетчик команд (СК)")]),t._v(" служит для организации обращений к ячейкам памяти, в которых хранятся команды программы. После исполнения любой команды СК указывает адрес ячейки памяти, содержащей следующую команду программы. Так как команды могут размещаться в любой из 2048 = 2^11 ячеек памяти, то СК имеет 11 разрядов.")]),t._v(" "),v("p",[v("strong",[t._v("Регистр адреса (РА)")]),t._v(" - 11-разрядный регистр, содержащий значение исполнительного адреса (адреса ячейки памяти, к которой обращается ЭВМ за командой или данными).")]),t._v(" "),v("p",[v("strong",[t._v("Регистр команд (РК).")]),t._v(" Этот 16-разрядный регистр используется для хранения кода команды, непосредственно выполняемой машиной.")]),t._v(" "),v("p",[v("strong",[t._v("Регистр данных (РД).")]),t._v(" Используется для временного хранения 16-рязрядных слов при обмене информацией между памятью и процессором.")]),t._v(" "),v("p",[v("strong",[t._v("Аккумулятор (А).")]),t._v(" 16-разрядный регистр, являющийся одним из главных элементов процессора. Машина может одновременно выполнять арифметические и логические операции только с одним или двумя операндами. Один из операндов находится в аккумуляторе, а второй (если их два) - в регистре данных. Результат помещается в А.")]),t._v(" "),v("p",[v("strong",[t._v("Регистр переноса (С)")]),t._v(" - это одноразрядный регистр, выступающий в качестве продолжения аккумулятора и заполняющийся при переполнении А. Этот регистр используется при выполнении сдвигов.")]),t._v(" "),v("p",[v("strong",[t._v("Арифметическо-логическое устройство (АЛУ)")]),t._v(" может выполнять такие арифметические операции, как сложение и сложение с учетом переноса, полученного в результате выполнения предыдущей операции. Кроме того, оно способно выполнять операции логического умножения, инвертирования, циклического сдвига.")])])}),[],!1,null,null,null);v.default=r.exports}}]);