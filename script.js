document.addEventListener("DOMContentLoaded", () => {
    const reportSelector = document.getElementById('reportSelector');
    const printArea = document.getElementById('printArea');

    const REPORTS = {
        // =================================================================
        // REPORTE 1: LISTADO DE PASAJEROS (Completo con todas las columnas)
        // =================================================================
        listado: `
            <div class="report-body">
                <table style="width: 100%; margin-bottom: 5px;">
                    <tr><td align="center"><img alt="logo" class="print-logo" src="https://ts-reports-development.s3.amazonaws.com/uploads/0cba3dd5-766e-4184-8fd4-a474082b60e8/logo-3e4a4eaa3c64dcae62994c72ef3eed4da840a29c82a10fb1f0bf5a4ee52d7e88.jpg"></td></tr>
                </table>
                <table style="width: 100%; margin-bottom: 10px;">
                    <tr><td align="right" class="fw-bold" style="width:35%">Fecha:</td><td>10/11/2025</td></tr>
                    <tr><td align="right" class="fw-bold">Servicio:</td><td>VAL-OVA-SER-VLL-ANT-CAL 08:30</td></tr>
                    <tr><td align="right" class="fw-bold">Bus:</td><td></td></tr>
                    <tr><td align="right" class="fw-bold">Origen:</td><td>Valparaiso(La Serena)</td></tr>
                    <tr><td align="right" class="fw-bold">Salida:</td><td>08:30 AM(15:10 PM)</td></tr>
                    <tr><td align="right" class="fw-bold">Destino:</td><td>Calama(Antofagasta)</td></tr>
                    <tr><td align="right" class="fw-bold">Vendidos:</td><td>65 (43)</td></tr>
                    <tr><td align="right" class="fw-bold">Conductor 1:</td><td></td></tr>
                    <tr><td align="right" class="fw-bold">Conductor 2:</td><td></td></tr>
                    <tr><td align="right" class="fw-bold">Auxiliar:</td><td></td></tr>
                </table>

                <div class="fw-bold bg-gray" style="padding: 2px; border: 1px solid #000; border-bottom: none;">Cuadro de reservas</div>
                <!-- table-listado: estilos específicos para el listado de pasajeros -->
                <table class="table-bordered table-listado" style="width: 100%; font-size: 9px;">
                    <thead>
                        <tr class="bg-gray">
                            <th style="width:8%">No</th>
                            <th style="width:35%">Nombre</th>
                            <th style="width:25%">ID</th>
                            <th style="width:20%">Teléfono</th>
                            <th style="width:12%">Equipaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Eduardo antonio castillo</td><td>12.943.995-5</td><td>949486748</td><td></td></tr>
                        <tr><td>2</td><td>Nelly montecinos</td><td>13131829-4</td><td>984621845</td><td></td></tr>
                        <tr><td>3</td><td>Sergio arredondo</td><td>12569501-9</td><td>958738380</td><td></td></tr>
                        <tr><td>3</td><td>Jennifer cortes</td><td>AY607634</td><td>982239906</td><td></td></tr>
                        <tr><td>3</td><td>Valentina cerda</td><td>18.994.988-k</td><td>931037273</td><td></td></tr>
                        <tr><td>3</td><td>Andrea ahumada</td><td>16.469.733-9</td><td>982658394</td><td></td></tr>
                        <tr><td>4</td><td>Victor ignacio crowford</td><td>18.236.911-K</td><td>995146708</td><td></td></tr>
                        <tr><td>5</td><td>Benito egaña</td><td>17.363.370-k</td><td>569762112</td><td></td></tr>
                        <tr><td>6</td><td>Franco fernandini ramirez</td><td>20.850.722-2</td><td>962818997</td><td></td></tr>
                        <tr><td>7</td><td>Pedro figueroa</td><td>15.924.304-4</td><td>961766736</td><td></td></tr>
                        <tr><td>8</td><td>Daniel lopez lara</td><td>21.311.886-2</td><td>947608480</td><td></td></tr>
                        <tr><td>8</td><td>Braulio braulio</td><td>17.046.522-9</td><td>982750470</td><td></td></tr>
                        <tr><td>9</td><td>Marcelo álvarez</td><td>13.744.076-8</td><td>926411523</td><td></td></tr>
                        <tr><td>10</td><td>Hernan alexis zepeda</td><td>19.267.018-7</td><td>988487851</td><td></td></tr>
                        <tr><td>10</td><td>Javiera ramirez inostroza</td><td>20.038.389-3</td><td>982541695</td><td></td></tr>
                        <tr><td>11</td><td>Fabián ramirez</td><td>19.205.472-9</td><td>940612477</td><td></td></tr>
                        <tr><td>12</td><td>Jean paez</td><td>18.520.417-0</td><td>976439373</td><td></td></tr>
                        <tr><td>12</td><td>Natalia torres</td><td>27.678.688-1</td><td>965408454</td><td></td></tr>
                        <tr><td>13</td><td>Marco jara</td><td>17.590.019-5</td><td>963155255</td><td></td></tr>
                        <tr><td>13</td><td>Braulio escobar</td><td>10.185.612-7</td><td>987755260</td><td></td></tr>
                        <tr><td>14</td><td>Alvaro guzman</td><td>13.987.788-8</td><td>948540982</td><td></td></tr>
                        <tr><td>15</td><td>Gabriel molina</td><td>17.567.667-8</td><td>948540982</td><td></td></tr>
                        <tr><td>16</td><td>David madrid</td><td>16106843-8</td><td>997446556</td><td></td></tr>
                        <tr><td>17</td><td>Jimmy polanco rojas</td><td>17.016.647-7</td><td>964648240</td><td></td></tr>
                        <tr><td>18</td><td>Mauricio suenzen</td><td>15.750.634-K</td><td>971952246</td><td></td></tr>
                        <tr><td>19</td><td>Erick vera</td><td>12823335-0</td><td>934096905</td><td></td></tr>
                        <tr><td>20</td><td>Francisco menares</td><td>15.100.258-7</td><td>983349766</td><td></td></tr>
                        <tr><td>21</td><td>Daniel mellado</td><td>18.940.221-k</td><td>937040967</td><td></td></tr>
                        <tr><td>21</td><td>Kriss alarcon</td><td>22.867.919-4</td><td>945306928</td><td></td></tr>
                        <tr><td>22</td><td>Gonzalo cienfuegos</td><td>18.355.063-2</td><td>979047607</td><td></td></tr>
                        <tr><td>23</td><td>Brian ossandon</td><td>18.688.929-0</td><td>974904576</td><td></td></tr>
                        <tr><td>23</td><td>Caterine pablaza</td><td>17276148-8</td><td>985042133</td><td></td></tr>
                        <tr><td>24</td><td>Nelson barraza</td><td>15.494.285-8</td><td>977595913</td><td></td></tr>
                        <tr><td>24</td><td>Gisel ramos</td><td>18756992-3</td><td>971501594</td><td></td></tr>
                        <tr><td>25</td><td>Patricio araya</td><td>18.827.313-0</td><td>990075541</td><td></td></tr>
                        <tr><td>25</td><td>Francisco opazo</td><td>10381465-0</td><td>995794240</td><td></td></tr>
                        <tr><td>26</td><td>Alfonso morales</td><td>16015745-3</td><td>974545470</td><td></td></tr>
                        <tr><td>27</td><td>Luis angel</td><td>16.597.512-k</td><td>985071327</td><td></td></tr>
                        <tr><td>28</td><td>Victor gil</td><td>16.307.003-0</td><td>961559050</td><td></td></tr>
                        <tr><td>29</td><td>Raul alday</td><td>11.939.560-7</td><td>985153645</td><td></td></tr>
                        <tr><td>30</td><td>Alejandro vergara araya</td><td>16595497-1</td><td>961990307</td><td></td></tr>
                        <tr><td>31</td><td>Claudia elena morales</td><td>13.107.726-2</td><td>994526238</td><td></td></tr>
                        <tr><td>32</td><td>Yolanda orellana</td><td>4.588.589-5</td><td>977759686</td><td></td></tr>
                        <tr><td>32</td><td>Jorge barrera</td><td>12.805.181-3</td><td>920414827</td><td></td></tr>
                        <tr><td>33</td><td>Ana orellana</td><td>5.685.694-3</td><td>977759686</td><td></td></tr>
                        <tr><td>33</td><td>Jhon varas</td><td>19.506.681-7</td><td>957005897</td><td></td></tr>
                        <tr><td>34</td><td>David madrid</td><td>16106843-8</td><td>997446556</td><td></td></tr>
                        <tr><td>35</td><td>Victor orellana</td><td>6.940.566-5</td><td>977759686</td><td></td></tr>
                        <tr><td>35</td><td>Francisco carrizo</td><td>18.386.180-8</td><td>948024026</td><td></td></tr>
                        <tr><td>35</td><td>Melany diaz</td><td>20.911.864-5</td><td>974336628</td><td></td></tr>
                        <tr><td>36</td><td>Mirta de la barra</td><td>7.454.240-9</td><td>977759686</td><td></td></tr>
                        <tr><td>36</td><td>Jahir lillo</td><td>16.443.196-7</td><td>928700686</td><td></td></tr>
                        <tr><td>37</td><td>Juan arenas</td><td>15.714.108-2</td><td>958906490</td><td></td></tr>
                        <tr><td>38</td><td>Miriam orellana</td><td>7.096.748-0</td><td>977759686</td><td></td></tr>
                        <tr><td>38</td><td>Valeska donoso</td><td>17.643.852-5</td><td>999511248</td><td></td></tr>
                        <tr><td>38</td><td>Sergio alvarado</td><td>14.211.158-6</td><td>998359084</td><td></td></tr>
                        <tr><td>39</td><td>Isabel orellana</td><td>7.707.772-3</td><td>977759686</td><td></td></tr>
                        <tr><td>39</td><td>Vladimir aguilera</td><td>10.898.937-8</td><td>958835528</td><td></td></tr>
                        <tr><td>40</td><td>Guillermo arancibia</td><td>13.175.365-9</td><td>977077868</td><td></td></tr>
                        <tr><td>40</td><td>Francisco mena</td><td>6.167.918-9</td><td>977759686</td><td></td></tr>
                        <tr><td>40</td><td>Maximiliano muñoz</td><td>22.636.868-k</td><td>978344019</td><td></td></tr>
                        <tr><td>41</td><td>Daniel rozas</td><td>19.180.820-7</td><td>940941350</td><td></td></tr>
                        <tr><td>42</td><td>Cristian berrios</td><td>13.172.790-9</td><td>976166777</td><td></td></tr>
                        <tr><td>42</td><td>Leonardo cortes</td><td>13.701.013-5</td><td>962230172</td><td></td></tr>
                        <tr><td>43</td><td>Betsabe anania</td><td>19.024.368-0</td><td>933218518</td><td></td></tr>
                    </tbody>
                </table>

                <div style="margin-top: 15px;">
                    <div class="fw-bold" style="border-bottom: 1px solid black; margin-bottom: 5px;">Puntos de embarque:</div>
                    <div style="margin-bottom: 4px;"><b>T. Rodoviario Valparaiso (08:30 AM):</b> 12 pax (32, 33, 35, 36, 38, 39, 40, 11, 13, 16, 19, 31)</div>
                    <div style="margin-bottom: 4px;"><b>T. Rodoviario Viña del Mar (09:10 AM):</b> 18 pax (34, 37, 41, 42, 3, 4, 6, 8, 14, 15, 18, 20, 21, 22, 23, 24, 25, 26)</div>
                    <div style="margin-bottom: 4px;"><b>Paradero La Palma Ruta 60 (09:40 AM):</b> 0 pax</div>
                    <div style="margin-bottom: 4px;"><b>La Calera Sopraval Ruta 5 (09:50 AM):</b> 1 pax (7)</div>
                    <div style="margin-bottom: 4px;"><b>Petrobras Ruta 5 (11:30 AM):</b> 0 pax</div>
                    <div style="margin-bottom: 4px;"><b>Terminal Ovalle (01:40 PM):</b> 9 pax (2, 3, 5, 10, 12, 13, 27, 29, 30)</div>
                    <div style="margin-bottom: 4px;"><b>T. La Serena (03:10 PM):</b> 16 pax (32, 33, 35, 36, 38, 39, 40, 42, 43, 1, 3, 10, 17, 21, 24, 28)</div>
                    <div style="margin-bottom: 4px;"><b>Terminal de Vallenar (05:40 PM):</b> 7 pax (35, 38, 40, 9, 12, 23, 25)</div>
                    <div style="margin-bottom: 4px;"><b>Terminal de Antofagasta (02:30 AM):</b> 2 pax (3, 8)</div>
                    <div style="margin-bottom: 4px;"><b>Sierra Gorda S. Allende 601 (04:30 AM):</b> 0 pax</div>
                </div>
                
                <div style="margin-top: 20px; text-align: right; font-style: italic; font-size: 9px;">
                    Impreso por: owner 10/11/2025 03:05 PM
                </div>
            </div>
        `,

        

        // =================================================================
        // REPORTE 2: DIAGRAMA DE PASAJES (Columnas separadas Origen/Destino)
        // =================================================================
        diagrama: `
             <div class="report-body">
                <table style="width: 100%; margin-bottom: 5px;">
                    <tr><td align="center"><img alt="logo" class="print-logo" src="https://ts-reports-development.s3.amazonaws.com/uploads/0cba3dd5-766e-4184-8fd4-a474082b60e8/logo-3e4a4eaa3c64dcae62994c72ef3eed4da840a29c82a10fb1f0bf5a4ee52d7e88.jpg"></td></tr>
                </table>
                
                <table style="width: 100%; margin-bottom: 10px;">
                    <tr><td align="right" class="fw-bold" style="width:35%">Fecha:</td><td>10/11/2025</td></tr>
                    <tr><td align="right" class="fw-bold">Servicio:</td><td>VAL-OVA-SER-VLL-ANT-CAL 08:30</td></tr>
                    <tr><td align="right" class="fw-bold">Bus:</td><td></td></tr>
                    <tr><td align="right" class="fw-bold">Origen:</td><td>Valparaiso(La Serena)</td></tr>
                    <tr><td align="right" class="fw-bold">Destino:</td><td>Calama(Antofagasta)</td></tr>
                    <tr><td align="right" class="fw-bold">Salida:</td><td>08:30 AM(15:10 PM)</td></tr>
                    <tr><td align="right" class="fw-bold">Duración:</td><td>21:00(11:10)</td></tr>
                    <tr><td align="right" class="fw-bold">Vendidos:</td><td>65 (43)</td></tr>
                </table>

                <div class="fw-bold bg-gray" style="padding: 2px; border: 1px solid #000; border-bottom: none;">Receptor</div>
                <!-- table-diagram: ancho de columnas personalizado para impresoras 80mm -->
                <table class="table-bordered table-diagram" style="width: 100%; font-size: 9px;">
                    <thead>
                        <tr class="bg-gray">
                            <th style="width:8%">No</th>
                            <th style="width:22%">Boleto</th>
                            <th style="width:25%">Embarque</th>
                            <th style="width:25%">Destino</th>
                            <th style="width:20%" align="center">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>KP174944-1</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>2</td><td>1631516-2</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.000</td></tr>
                        <tr><td>3</td><td>KP180945-3</td><td>Terminal Ovalle</td><td>La Serena</td><td align="center">$4.661</td></tr>
                        <tr><td>3</td><td>KP180768-3</td><td>T. Viña del Mar</td><td>Ovalle</td><td align="center">$17.980</td></tr>
                        <tr><td>3</td><td>KP180500-3</td><td>T. Antofagasta</td><td>Calama</td><td align="center">$9.513</td></tr>
                        <tr><td>3</td><td>1611972-3</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.000</td></tr>
                        <tr><td>4</td><td>KP170749-4</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>5</td><td>KP177285-5</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>6</td><td>KP181203-6</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>7</td><td>KP176325-7</td><td>La Calera Ruta 5</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>8</td><td>KP181068-8</td><td>T. Antofagasta</td><td>Calama</td><td align="center">$9.513</td></tr>
                        <tr><td>8</td><td>KP177814-8</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>9</td><td>KP176414-9</td><td>Terminal Vallenar</td><td>Antofagasta</td><td align="center">$33.200</td></tr>
                        <tr><td>10</td><td>KP142097-10</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>10</td><td>KP181214-10</td><td>Terminal Ovalle</td><td>La Serena</td><td align="center">$4.661</td></tr>
                        <tr><td>11</td><td>KP178119-11</td><td>T. Valparaiso</td><td>Sierra Gorda</td><td align="center">$45.670</td></tr>
                        <tr><td>12</td><td>KP181395-12</td><td>Terminal Ovalle</td><td>Vallenar</td><td align="center">$12.370</td></tr>
                        <tr><td>12</td><td>KP175665-12</td><td>Terminal Vallenar</td><td>Antofagasta</td><td align="center">$33.200</td></tr>
                        <tr><td>13</td><td>KP168652-13</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>13</td><td>KP179456-13</td><td>T. Valparaiso</td><td>Los Vilos</td><td align="center">$17.980</td></tr>
                        <tr><td>14</td><td>KP175976-14</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>15</td><td>KP175976-15</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>16</td><td>1623745-16</td><td>T. Valparaiso</td><td>Calama</td><td align="center">$61.630</td></tr>
                        <tr><td>17</td><td>KP176524-17</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>18</td><td>KP176312-18</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>19</td><td>1623745-19</td><td>T. Valparaiso</td><td>Calama</td><td align="center">$61.630</td></tr>
                        <tr><td>20</td><td>KP176097-20</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>21</td><td>KP176477-21</td><td>T. La Serena</td><td>Calama</td><td align="center">$38.910</td></tr>
                        <tr><td>21</td><td>KP180896-21</td><td>T. Viña del Mar</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>22</td><td>KP171130-22</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>23</td><td>KP177018-23</td><td>Terminal Vallenar</td><td>Sierra Gorda</td><td align="center">$37.005</td></tr>
                        <tr><td>23</td><td>1639602-23</td><td>T. Viña del Mar</td><td>La Serena</td><td align="center">$17.000</td></tr>
                        <tr><td>24</td><td>KP177143-24</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>24</td><td>1639611-24</td><td>T. Viña del Mar</td><td>La Serena</td><td align="center">$17.000</td></tr>
                        <tr><td>25</td><td>KP171931-25</td><td>Terminal Vallenar</td><td>Calama</td><td align="center">$37.005</td></tr>
                        <tr><td>25</td><td>KP179626-25</td><td>T. Viña del Mar</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>26</td><td>1636350-26</td><td>T. Viña del Mar</td><td>Calama</td><td align="center">$45.000</td></tr>
                        <tr><td>27</td><td>KP177076-27</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>28</td><td>KP172298-28</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>29</td><td>KP175158-29</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>30</td><td>1633067-30</td><td>Terminal Ovalle</td><td>Antofagasta</td><td align="center">$35.000</td></tr>
                        <tr><td>31</td><td>KP172146-31</td><td>T. Valparaiso</td><td>Calama</td><td align="center">$45.670</td></tr>
                        <tr><td>32</td><td>KP173820-32</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>32</td><td>KP177248-32</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>33</td><td>KP173820-33</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>33</td><td>KP176430-33</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>34</td><td>1615211-34</td><td>T. Viña del Mar</td><td>Sierra Gorda</td><td align="center">$61.630</td></tr>
                        <tr><td>35</td><td>KP173820-35</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>35</td><td>KP176366-35</td><td>Terminal Vallenar</td><td>Sierra Gorda</td><td align="center">$37.005</td></tr>
                        <tr><td>35</td><td>KP180681-35</td><td>T. La Serena</td><td>Vallenar</td><td align="center">$11.320</td></tr>
                        <tr><td>36</td><td>KP173820-36</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>36</td><td>KP176822-36</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>37</td><td>KP169662-37</td><td>T. Viña del Mar</td><td>Calama</td><td align="center">$45.670</td></tr>
                        <tr><td>38</td><td>KP181655-38</td><td>T. La Serena</td><td>Vallenar</td><td align="center">$11.320</td></tr>
                        <tr><td>38</td><td>KP176504-38</td><td>Terminal Vallenar</td><td>Calama</td><td align="center">$37.005</td></tr>
                        <tr><td>38</td><td>KP173820-38</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>39</td><td>KP176751-39</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                        <tr><td>39</td><td>KP173820-39</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>40</td><td>KP173820-40</td><td>T. Valparaiso</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>40</td><td>KP180641-40</td><td>T. La Serena</td><td>Vallenar</td><td align="center">$11.320</td></tr>
                        <tr><td>40</td><td>KP166195-40</td><td>Terminal Vallenar</td><td>Sierra Gorda</td><td align="center">$37.005</td></tr>
                        <tr><td>41</td><td>KP175122-41</td><td>T. Viña del Mar</td><td>Antofagasta</td><td align="center">$40.910</td></tr>
                        <tr><td>42</td><td>KP175399-42</td><td>T. La Serena</td><td>Sierra Gorda</td><td align="center">$38.910</td></tr>
                        <tr><td>42</td><td>KP178750-42</td><td>T. Viña del Mar</td><td>La Serena</td><td align="center">$16.077</td></tr>
                        <tr><td>43</td><td>KP181190-43</td><td>T. La Serena</td><td>Antofagasta</td><td align="center">$35.198</td></tr>
                    </tbody>
                    <tfoot>
                        <tr class="fw-bold">
                            <td colspan="4" align="right">Monto Total:</td>
                            <td align="center">$2.008.425</td>
                        </tr>
                    </tfoot>
                </table>

                <div style="margin-top: 15px;">
                    <table class="table-bordered" style="width: 100%; font-size: 9px;">
                        <tr class="bg-gray fw-bold">
                            <td align="center" style="width:30px">Sucursal</td>
                            <td align="center" style="width:40px">Recaudado</td>
                            <td align="center" style="width:30px">Asientos</td>
                        </tr>
                        <tr><td>Cormar Bus</td><td align="center">$1.639.535</td><td align="center">56</td></tr>
                        <tr><td>Terminal Ovalle</td><td align="center">$70.000</td><td align="center">2</td></tr>
                        <tr><td>Coquimbo</td><td align="center">$35.000</td><td align="center">1</td></tr>
                        <tr><td>Viña Del Mar</td><td align="center">$79.000</td><td align="center">3</td></tr>
                        <tr><td>Aramark</td><td align="center">$184.890</td><td align="center">3</td></tr>
                    </table>
                </div>

                <div style="margin-top: 15px;">
                    <div class="fw-bold" style="border-bottom: 1px solid black;">Puntos de embarque:</div>
                    <div class="fw-bold" style="margin-top:5px;">Valparaiso</div>
                    <div>T. Valparaiso (08:30 AM): 12 (32, 33, 35, 36, 38, 39, 40, 11, 13, 16, 19, 31)</div>
                    <div class="fw-bold" style="margin-top:5px;">Viña Del Mar</div>
                    <div>T. Viña del Mar (09:10 AM): 18 (34, 37, 41, 42, 3, 4, 6, 8, 14, 15, 18, 20, 21, 22, 23, 24, 25, 26)</div>
                    <div class="fw-bold" style="margin-top:5px;">Quillota</div>
                    <div>Paradero La Palma Ruta 60 (09:40 AM)</div>
                    <div class="fw-bold" style="margin-top:5px;">La Calera</div>
                    <div>La Calera Sopraval Ruta 5 (09:50 AM): 1 (7)</div>
                    <div class="fw-bold" style="margin-top:5px;">Los Vilos</div>
                    <div>Petrobras Ruta 5 (11:30 AM)</div>
                    <div class="fw-bold" style="margin-top:5px;">Ovalle</div>
                    <div>Terminal Ovalle (01:40 PM): 9 (2, 3, 5, 10, 12, 13, 27, 29, 30)</div>
                    <div class="fw-bold" style="margin-top:5px;">La Serena</div>
                    <div>T. La Serena (03:10 PM): 16 (32, 33, 35, 36, 38, 39, 40, 42, 43, 1, 3, 10, 17, 21, 24, 28)</div>
                     <div class="fw-bold" style="margin-top:5px;">Vallenar</div>
                    <div>Terminal Vallenar (05:40 PM): 7 (35, 38, 40, 9, 12, 23, 25)</div>
                    <div class="fw-bold" style="margin-top:5px;">Antofagasta</div>
                    <div>Terminal Antofagasta (02:30 AM): 2 (3, 8)</div>
                    <div class="fw-bold" style="margin-top:5px;">Sierra Gorda</div>
                    <div>Sierra Gorda S. Allende 601 (04:30 AM)</div>
                </div>

                <div style="margin-top: 15px;">
                    <div class="fw-bold" style="border-bottom: 1px solid black;">Resumen de Puntos de Descarga:</div>
                    <div style="margin-top:5px;"><b>Los Vilos</b>: Petrobras Ruta 5 - 1 (13)</div>
                    <div><b>Ovalle</b>: Terminal Ovalle - 1 (3)</div>
                    <div><b>La Serena</b>: T. La Serena - 7 (42, 3, 10, 21, 23, 24, 25)</div>
                    <div><b>Vallenar</b>: Terminal Vallenar - 4 (35, 38, 40, 12)</div>
                    <div><b>Antofagasta</b>: Terminal Antofagasta - 28 (32, 33, 36, 39, 41, 43, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 20, 22, 24, 27, 29, 30)</div>
                    <div><b>Sierra Gorda</b>: S. Allende 601 - 6 (34, 35, 40, 42, 11, 23)</div>
                    <div><b>Calama</b>: Terminal Pullman Bus - 9 (37, 38, 3, 8, 16, 19, 21, 25, 26)</div>
                    <div><b>Unassigned</b>: 9 (32, 33, 35, 36, 38, 39, 40, 28, 31)</div>
                </div>

                <div style="margin-top: 15px; border-top: 1px dashed black; padding-top: 5px;">
                    <div class="fw-bold">Recuento de abordados: 65</div>
                    <div>Recuento de no abordados: 0</div>
                    <div class="fw-bold">Total Ventas: $2.008.425</div>
                </div>

                <div style="margin-top: 20px; text-align: right; font-size: 9px;">
                    Impreso por: owner 10/11/2025 03:04 PM
                </div>
            </div>
        `
    };

    function loadReport(type) {
        // If the equipaje report is requested, derive it from the base `listado`
        if (type === 'listado_equipaje') {
            // Render the original listado first
            printArea.innerHTML = REPORTS['listado'];

            // Swap the table class to a dedicated one for equipaje-specific styling
            const tbl = printArea.querySelector('.table-listado');
            if (tbl) {
                tbl.classList.remove('table-listado');
                tbl.classList.add('table-listado-equipaje');
            }

            // For each body row, replace the 5th cell content with an equipaje box
            const rows = printArea.querySelectorAll('.table-listado-equipaje tbody tr');
            rows.forEach(r => {
                const td = r.querySelector('td:nth-child(5)');
                if (td) td.innerHTML = '<div class="equipaje-cell"></div>';
            });

            // Then normalize IDs as usual
            normalizeIds();
            return;
        }

        // Default behavior: render requested report
        printArea.innerHTML = REPORTS[type];
        // Normalizar IDs en cualquier tabla de listado (quitar puntos)
        normalizeIds();
    }

    // Quita los puntos de formato en las celdas de ID (columna 3) para tablas
    // de clase `table-listado` y `table-listado-equipaje`. Mantiene guiones y letras.
    function normalizeIds() {
        const selectors = ['.table-listado tbody td:nth-child(3)', '.table-listado-equipaje tbody td:nth-child(3)'];
        selectors.forEach(sel => {
            const cells = printArea.querySelectorAll(sel);
            cells.forEach(td => {
                // Conserva el contenido pero elimina todos los puntos '.'
                const raw = td.textContent || '';
                const normalized = raw.replace(/\./g, '').replace(/\s+/g, ' ').trim();
                td.textContent = normalized;
            });
        });
    }

    reportSelector.addEventListener('change', (e) => loadReport(e.target.value));
    loadReport(reportSelector.value); // Carga inicial

    // Print handler: open browser print dialog (no local print agent)
    // Simple print handler: open browser print dialog (no local print agent)
    window.handleConfirmAndPrint = function() {
        window.print();
    };
});