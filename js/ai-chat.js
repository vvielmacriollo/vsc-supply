/* ============================================
   VSC & SUPPLY LLC — Victoria AI Assistant
   Motor de matching avanzado con sinónimos y stemming
   Canales: ceo@vsc.supply · WhatsApp +1 334 763 3841
   ============================================ */

(function() {

  // ============================================
  // 📚 DICCIONARIO DE SINÓNIMOS POR IDIOMA
  // Agrupa palabras equivalentes para ampliar el matching
  // ============================================
  const synonyms = {
    es: {
      // Contacto
      contacto: ['contacto','contactar','contactarlos','comunicar','comunicarse','hablar','llamar','escribir','mensaje','comunicación','contactarlos','ubicación','ubicación','donde','dónde','localización','dirección','direccion'],
      email: ['email','correo','mail','correo electrónico','correo electronico','e-mail','escribir','enviar','mandar'],
      whatsapp: ['whatsapp','wasap','wasa','wsp','wpp','número','numero','teléfono','telefono','celular','móvil','movil','chat'],
      telefono: ['teléfono','telefono','número','numero','celular','móvil','movil','llamar','marcar'],
      
      // Chartering
      charter: ['charter','fletar','fletamento','flete','arrendar','alquilar','arriendo','alquiler','contrato','contratos','booking','reservar'],
      formulario: ['formulario','formato','plantilla','form','template','documento','papel','pdf','archivo','solicitud','aplicación','aplicacion','formato','formularios'],
      
      // Servicios
      servicio: ['servicio','servicios','servicio','ofrecen','ofrecer','hacen','hacer','proveen','proveer','trabajan','trabajo','actividad','actividades','soluciones'],
      inspeccion: ['inspección','inspeccion','inspecciones','survey','q&q','quality','quantity','control','cargo','revisión','revision','verificación','verificacion'],
      shipmanagement: ['shipmanagement','gestión','gestion','manejo','administración','administracion','buques','barcos','vessels','gestión técnica','gestion tecnica'],
      supply: ['supply','suministro','suministros','provisiones','provision','víveres','viveres','avituallamiento','repuestos','spare','parts'],
      agency: ['agency','agencia','agente','puerto','puertos','port','logística','logistica'],
      trading: ['trading','comercio','commodities','commodity','crudo','crude','oil','petróleo','petroleo','diesel','diésel','químicos','quimicos'],
      offshore: ['offshore','osv','aht','psv','rov','marítimo','maritimo','subsea','plataforma'],
      logistics: ['logistics','logística','logistica','flete','envío','envio','transporte','carga','contenedor','container'],
      consulting: ['consulting','consultoría','consultoria','asesoría','asesoria','advisory','auditoría','auditoria','peritaje'],
      
      // Info empresa
      empresa: ['empresa','compañía','compania','compañía','negocio','comercio','firma','organización','organizacion','corporación','corporacion','vsc','victory','victory ship'],
      ceo: ['ceo','presidente','chairman','director','jefe','fundador','dueño','dueno','propietario','capitán','capitan','lider','líder'],
      equipo: ['equipo','staff','personal','empleados','trabajadores','colaboradores','directivos','miembros'],
      ubicacion: ['ubicación','ubicacion','dirección','direccion','oficina','sede','localización','localizacion','donde','dónde','hollywood','florida'],
      historia: ['historia','fundación','fundacion','año','ano','fundada','creada','origen','desde'],
      
      // Cotización
      cotizacion: ['cotización','cotizacion','cotizar','precio','precios','tarifa','tarifas','costo','costos','cuánto','cuanto','presupuesto','rate','quote','cost'],
      pago: ['pago','pagos','pagar','métodos','metodos','formas','transferencia','wire','tarjeta','crédito','credito','efectivo'],
      
      // Normativas
      certificacion: ['certificación','certificacion','certificaciones','certificado','ifia','iso','astm','api','ip','acreditación','acreditacion','norma','normas'],
      normativa: ['normativa','regulación','regulacion','reglamento','convenio','tratado','marpol','solas','ism','isps','mlc','imo','omi'],
      ambiental: ['ambiental','medio','ambiente','environment','sostenibilidad','sustainability','ods','onu','oceanos','océanos','planeta','verde'],
      
      // Tipos de buques
      buque: ['buque','buques','barco','barcos','nave','naves','vessel','vessels','embarcación','embarcacion','ship','ships','flota','fleet'],
      tipo_buque: ['panamax','capesize','handysize','handymax','kamsarmax','granelero','portacontenedor','tanquero','tanker','bulk','container'],
      
      // Stats
      stats: ['stats','estadísticas','estadisticas','cifras','números','numeros','cuántos','cuantos','cantidad','total'],
    },
    en: {
      contacto: ['contact','contact us','reach','call','talk','communicate','message','location','where','address'],
      email: ['email','mail','e-mail','write','send'],
      whatsapp: ['whatsapp','wsp','number','phone','telephone','mobile','chat'],
      
      charter: ['charter','chartering','hire','rent','lease','book','booking','contract','contracts'],
      formulario: ['form','charter form','template','document','pdf','file','request','application','download'],
      
      servicio: ['service','services','offer','provide','do','work','activity','solution','solutions'],
      inspeccion: ['inspection','inspections','survey','q&q','quality','quantity','control','cargo','check','verification'],
      shipmanagement: ['shipmanagement','management','handling','administration','vessels','ships','technical management'],
      supply: ['supply','supplies','provisions','stores','spare','parts','chandlery','shipchandler'],
      agency: ['agency','agent','port','ports','logistics'],
      trading: ['trading','trade','commodities','commodity','crude','oil','diesel','chemicals'],
      offshore: ['offshore','osv','aht','psv','rov','maritime','subsea','platform'],
      logistics: ['logistics','freight','shipping','transport','cargo','container'],
      consulting: ['consulting','advisory','audit','inspection services','expertise'],
      
      empresa: ['company','business','firm','organization','corporation','vsc','victory','victory ship'],
      ceo: ['ceo','president','chairman','director','chief','founder','owner','captain','leader'],
      equipo: ['team','staff','personnel','employees','workers','collaborators','executives','members'],
      ubicacion: ['location','address','office','headquarters','where','hollywood','florida'],
      historia: ['history','founded','founding','year','origin','since'],
      
      cotizacion: ['quote','quotation','price','prices','rate','rates','cost','costs','how much','budget'],
      pago: ['payment','pay','methods','wire transfer','card','credit','cash'],
      
      certificacion: ['certification','certifications','certificate','ifia','iso','astm','api','ip','accreditation','standard'],
      normativa: ['regulation','regulations','rule','convention','marpol','solas','ism','isps','mlc','imo'],
      ambiental: ['environmental','environment','sustainability','sdg','un','ocean','planet','green'],
      
      buque: ['vessel','vessels','ship','ships','boat','boats','fleet'],
      tipo_buque: ['panamax','capesize','handysize','handymax','kamsarmax','bulker','container ship','tanker'],
      
      stats: ['stats','statistics','numbers','how many','total'],
    },
    zh: {
      contacto: ['联系','联系我们','沟通','打电话','说话','消息','位置','地址'],
      email: ['邮箱','电子邮件','邮件','写信','发送'],
      whatsapp: ['whatsapp','ws','号码','电话','手机','聊天'],
      
      charter: ['租船','租赁','包船','预约','合同'],
      formulario: ['表格','格式','模板','文档','pdf','文件','申请','下载'],
      
      servicio: ['服务','提供','做','工作','活动','解决方案'],
      inspeccion: ['检验','检查','测量','质量','数量','货物','控制'],
      shipmanagement: ['船舶管理','管理','处理','行政','船队'],
      supply: ['供应','补给','备件','伙食','润滑油'],
      agency: ['代理','港口','物流'],
      trading: ['贸易','大宗商品','原油','石油','柴油','化学品'],
      offshore: ['海上作业','osv','aht','psv','rov','海事'],
      logistics: ['物流','货运','运输','货物','集装箱'],
      consulting: ['咨询','顾问','审计','专家'],
      
      empresa: ['公司','企业','业务','机构','vsc','victory'],
      ceo: ['ceo','董事长','总裁','主席','创始人','所有者','船长'],
      equipo: ['团队','员工','人员','高管','成员'],
      ubicacion: ['位置','地址','办公室','总部','好莱坞','佛罗里达'],
      historia: ['历史','成立','创建','年份','起源'],
      
      cotizacion: ['报价','价格','费用','费率','多少钱','预算'],
      pago: ['付款','支付','方式','电汇','信用卡','现金'],
      
      certificacion: ['认证','证书','ifia','iso','astm','api','ip','标准'],
      normativa: ['法规','规定','公约','marpol','solas','ism','isps','mlc','imo'],
      ambiental: ['环境','可持续','sdg','联合国','海洋','地球','绿色'],
      
      buque: ['船','船舶','船只','船队'],
      tipo_buque: ['巴拿马型','好望角型','灵便型','散货船','集装箱船','油轮'],
      
      stats: ['数据','统计','多少','总数'],
    },
    ru: {
      contacto: ['контакт','связаться','связаться с нами','позвонить','поговорить','сообщение','местоположение','где','адрес'],
      email: ['email','почта','электронная почта','письмо','отправить'],
      whatsapp: ['whatsapp','вотсап','номер','телефон','мобильный','чат'],
      
      charter: ['фрахт','чартер','аренда','арендовать','нанять','снять','бронировать','контракт'],
      formulario: ['форма','бланк','шаблон','документ','pdf','файл','запрос','заявка','скачать'],
      
      servicio: ['услуга','услуги','предлагать','делать','работа','деятельность','решение'],
      inspeccion: ['инспекция','инспекции','сюрвей','проверка','контроль','качество','количество','груз'],
      shipmanagement: ['менеджмент','управление','судовой менеджмент','техническое управление'],
      supply: ['снабжение','поставка','провизия','запчасти','магазин'],
      agency: ['агентство','агент','порт','порты','логистика'],
      trading: ['трейдинг','торговля','сырье','нефть','дизель','химикаты'],
      offshore: ['офшор','osv','aht','psv','rov','морской','подводный'],
      logistics: ['логистика','экспедитор','перевозка','груз','контейнер'],
      consulting: ['консалтинг','консультация','аудит','экспертиза'],
      
      empresa: ['компания','фирма','бизнес','организация','корпорация','vsc','victory'],
      ceo: ['ceo','президент','председатель','директор','основатель','владелец','капитан'],
      equipo: ['команда','персонал','сотрудники','работники','руководители','члены'],
      ubicacion: ['местоположение','адрес','офис','штаб-квартира','где','голливуд','флорида'],
      historia: ['история','основание','год','создание','происхождение'],
      
      cotizacion: ['расчёт','цена','стоимость','тариф','сколько','бюджет'],
      pago: ['оплата','платёж','способы','перевод','карта','кредит','наличные'],
      
      certificacion: ['сертификация','сертификат','ifia','iso','astm','api','ip','аккредитация','стандарт'],
      normativa: ['норматив','регламент','правило','конвенция','marpol','solas','ism','isps','mlc','imo'],
      ambiental: ['экология','окружающая','устойчивость','цур','оон','океан','планета','зелёный'],
      
      buque: ['судно','суда','корабль','корабли','флот'],
      tipo_buque: ['panamax','capesize','handysize','балкер','контейнеровоз','танкер'],
      
      stats: ['статистика','цифры','сколько','всего'],
    }
  };

  // ============================================
  // 🔤 STEMIZADOR SIMPLE
  // Reduce las palabras a su raíz para ampliar el matching
  // ============================================
  function stem(word) {
    if (!word || word.length < 4) return word;
    
    // Inglés
    word = word
      .replace(/(ing|ed|es|s)$/i, '')
      .replace(/(ation|ition)$/i, '');
    
    // Español
    word = word
      .replace(/(ando|iendo|ado|ido|ación|acion|aciones|adores|ador)$/i, '')
      .replace(/(amos|emos|imos|an|en|es|ar|er|ir)$/i, '');
    
    return word;
  }

  // ============================================
  // 📚 EXPANSIÓN DE SINÓNIMOS
  // Añade palabras equivalentes a una lista de keywords
  // ============================================
  function expandWithSynonyms(keywords, lang) {
    if (!synonyms[lang]) return keywords;
    
    const expanded = new Set(keywords);
    const syn = synonyms[lang];
    
    keywords.forEach(kw => {
      const kwLower = kw.toLowerCase();
      
      Object.keys(syn).forEach(groupKey => {
        const group = syn[groupKey];
        
        // Si la keyword pertenece a un grupo, añadir todas sus variantes
        if (group.some(g => kwLower.includes(g) || g.includes(kwLower))) {
          group.forEach(g => expanded.add(g));
        }
      });
    });
    
    return Array.from(expanded);
  }

  // ============================================
  // 🧠 BASE DE CONOCIMIENTO (usa las keywords base;
  // la expansión de sinónimos se hace automáticamente)
  // ============================================
  const knowledgeBase = {

    es: [
      // === IDENTIDAD ===
      {
        keywords: ['qué es vsc', 'que es vsc', 'qué es victory', 'sobre la empresa', 'quiénes son', 'quiénes somos', 'empresa', 'compañía', 'victory', 'vsc', 'a qué se dedican', 'qué hacen', 'actividad', 'rubro', 'giro', 'sector'],
        response: "🚢 <strong>VSC &amp; SUPPLY LLC</strong><br><br>Somos una empresa marítima global fundada en <strong>2021</strong> con sede en Hollywood, Florida. Nuestro slogan es <strong>'Certainty &amp; Excellence at Sea'</strong>.<br><br>Ofrecemos servicios marítimos integrales:<br>• Inspecciones certificadas (IFIA, ISO)<br>• Shipmanagement de 30+ buques<br>• Fletamento global<br>• Suministros marítimos<br>• Agencia portuaria 24/7<br>• Trading de commodities<br>• Servicios offshore<br>• Logística marítima<br>• Consultoría marítima<br><br>Gestionamos <strong>30+ buques</strong> y <strong>1,000+ marinos</strong>. ⚓"
      },
      {
        keywords: ['nombre', 'razón social', 'razon social', 'nombre legal', 'nombre completo', 'cómo se llama'],
        response: "El nombre legal completo es: <strong>VSC &amp; SUPPLY LLC</strong><br><br>También puede referirse a nosotros como <em>VSC</em> o <em>VSC &amp; SUPPLY</em>.<br><br>Estamos registrados como LLC (Limited Liability Company) en los Estados Unidos. ⚓"
      },
      {
        keywords: ['slogan', 'lema', 'eslogan', 'filosofía', 'filosofia', 'filosofia'],
        response: "Nuestro slogan oficial es:<br><br><strong>\"Certainty &amp; Excellence at Sea\"</strong><br><br>Que en español significa <em>\"Certeza y Excelencia en el Mar\"</em>.<br><br>Refleja nuestro compromiso con la seguridad operativa y los más altos estándares de calidad. ⚓🌊"
      },

      // === UBICACIÓN Y CONTACTO ===
      {
        keywords: ['dónde están', 'donde estan', 'ubicación', 'ubicacion', 'oficina', 'sede', 'dirección', 'direccion', 'hollywood', 'florida', 'estados unidos', 'usa'],
        response: "📍 <strong>Oficina Corporativa:</strong><br>2165 Van Buren St, Suite 911<br>Hollywood, FL 33020<br>United States 🇺🇸<br><br>Operamos globalmente en los principales puertos y corredores comerciales del mundo. 🌎"
      },
      {
        keywords: ['contacto', 'contactar', 'cómo contacto', 'como contacto', 'medios de contacto', 'comunicarme', 'comunicarse', 'hablar', 'llamar', 'escribir', 'cómo los contacto'],
        response: "📞 <strong>Canales de contacto disponibles 24/7:</strong><br><br>📧 <strong>Email:</strong> ceo@vsc.supply<br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>🏢 <strong>Oficina:</strong> 2165 Van Buren St, Suite 911, Hollywood, FL 33020<br><br>También puede usar el formulario en la sección <strong>Contacto</strong> de nuestro sitio web. ⚓"
      },
      {
        keywords: ['correo', 'email', 'mail', 'correo electrónico', 'correo electronico', 'a qué correo escribo'],
        response: "Puede escribirnos a:<br><br>📧 <strong>ceo@vsc.supply</strong><br><br>Respondemos en menos de 2 horas. ⚓"
      },
      {
        keywords: ['teléfono', 'telefono', 'número', 'numero', 'a qué número llamo', 'a qué teléfono', 'llamar'],
        response: "Puede contactarnos por:<br><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>Disponibles 24/7 para atender su operación. ⚓"
      },
      {
        keywords: ['whatsapp', 'wasap', 'wsp', 'número de whatsapp', 'numero de whatsapp'],
        response: "Nuestro WhatsApp corporativo es:<br><br>📱 <strong>+1 334 763 3841</strong><br><br>Haga clic o copie el número para escribirnos directamente. Respondemos 24/7. ⚓"
      },
      {
        keywords: ['horario', 'horario de atención', 'a qué hora abren', 'disponibles', 'cuándo están abiertos', '24/7', 'fines de semana'],
        response: "Estamos disponibles <strong>24/7</strong>, los 365 días del año.<br><br>El sector marítimo nunca duerme, y nuestro equipo tampoco. Puede contactarnos por WhatsApp o email en cualquier momento. ⚓🌊"
      },

      // === FUNDACIÓN ===
      {
        keywords: ['cuándo se fundó', 'cuando se fundo', 'año de fundación', 'cuándo nació', 'desde cuándo', 'desde qué año', 'historia', 'origen', 'fundación', 'fundacion'],
        response: "VSC &amp; SUPPLY LLC fue fundada en <strong>2021</strong>.<br><br>Desde entonces hemos construido una trayectoria comprobada con:<br>• <strong>30+ buques gestionados</strong><br>• <strong>1,000+ marinos</strong><br>• Operaciones en los principales corredores comerciales globales<br><br>Nuestro equipo directivo suma además décadas de experiencia individual en el sector. ⚓"
      },

      // === EQUIPO DIRECTIVO ===
      {
        keywords: ['ceo', 'presidente', 'chairman', 'quién dirige', 'quién lidera', 'fundador', 'dueño', 'propietario'],
        response: "👨‍✈️ <strong>Capt. Victor Vielma</strong><br><strong>CEO &amp; Chairman</strong><br><br>Un capitán con más de dos décadas de experiencia en el sector marítimo mercante global.<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓"
      },
      {
        keywords: ['victor vielma', 'vielma', 'capitán vielma', 'capt vielma', 'quién es el ceo'],
        response: "<strong>Capt. Victor Vielma</strong> es el CEO &amp; Chairman de VSC &amp; SUPPLY LLC.<br><br>👨‍✈️ Cuenta con más de dos décadas de experiencia como capitán en el sector marítimo mercante global.<br><br>📧 <strong>ceo@vsc.supply</strong> 📱 +1 334 763 3841 ⚓"
      },
      {
        keywords: ['lorena', 'lorena vielma', 'quién es lorena', 'vice chairman', 'vicepresidenta', 'vicepresidente', 'número dos'],
        response: "💼 <strong>Lorena Vielma</strong><br><strong>Vice Chairman</strong><br><br>Responsable de la estrategia comercial, alianzas internacionales y expansión de la red global de VSC &amp; SUPPLY LLC.<br><br>Es una pieza clave en el crecimiento internacional de la compañía. ⚓"
      },
      {
        keywords: ['javier', 'javier vielma', 'it manager', 'gerente de ti', 'jefe de tecnología', 'administrador de ti'],
        response: "💻 <strong>V. Javier Vielma</strong><br><strong>IT Manager</strong><br><br>Dirige la infraestructura tecnológica, ciberseguridad y sistemas digitales de VSC &amp; SUPPLY LLC a nivel global.<br><br>Responsable de mantener nuestra operación digital siempre segura y disponible 24/7. ⚓"
      },
      {
        keywords: ['equipo directivo', 'equipo de liderazgo', 'directivos', 'quiénes conforman', 'quiénes están a cargo'],
        response: "Nuestro <strong>equipo directivo</strong> está conformado por:<br><br>👨‍✈️ <strong>Capt. Victor Vielma</strong> — CEO &amp; Chairman<br>💼 <strong>Lorena Vielma</strong> — Vice Chairman<br>💻 <strong>V. Javier Vielma</strong> — IT Manager<br><br>Todo el equipo suma décadas de experiencia en el sector marítimo mercante. 🚢"
      },
      {
        keywords: ['cuántos empleados', 'cuánta gente trabaja', 'cuántos marinos', 'personal', 'plantilla', 'tripulantes'],
        response: "Gestionamos más de <strong>1,000 marinos</strong> a nivel global, incluyendo:<br><br>👨‍✈️ Capitanes<br>👮 Oficiales<br>⚓ Tripulación<br><br>Además, contamos con un equipo corporativo en oficina y una red global de colaboradores. 🚢"
      },

      // === SERVICIOS ===
      {
        keywords: ['servicios', 'qué servicios ofrecen', 'áreas de negocio', 'unidades', 'líneas de servicio', 'portafolio', 'catálogo', 'qué hacen exactamente'],
        response: "Ofrecemos <strong>9 unidades de negocio especializadas</strong>:<br><br>1️⃣ <strong>Inspections &amp; Quality Control</strong> — Cargo Control, Q&amp;Q, Bunker Surveys<br>2️⃣ <strong>Shipmanagement &amp; Technical Operation</strong> — 30+ buques, 1,000+ marinos<br>3️⃣ <strong>Chartering &amp; Shipbrokering</strong> — Time/Voyage/Bareboat Charter<br>4️⃣ <strong>Shipchandler &amp; Marine Supply</strong> — Provisiones, repuestos, lubricantes<br>5️⃣ <strong>Marine Agency &amp; Port Logistics</strong> — Agencia 24/7, ISPS, aduanas<br>6️⃣ <strong>Commodity Trading &amp; Mobilization</strong> — Crudo, diésel, químicos<br>7️⃣ <strong>Offshore &amp; Specialized Services</strong> — OSV, AHT, PSV, ROV<br>8️⃣ <strong>Marine Logistics &amp; Seaborne Coordination</strong> — FCL/LCL, ocean freight<br>9️⃣ <strong>Marine Consulting &amp; Advisory</strong> — Auditorías, arbitrajes<br><br>¿Sobre cuál le gustaría saber más? 🚢"
      },
      {
        keywords: ['inspecciones', 'inspección', 'q&q', 'survey', 'control de calidad', 'cargo control', 'loss control', 'bunker survey', 'draft survey'],
        response: "🛡️ <strong>INSPECTIONS &amp; QUALITY CONTROL</strong><br><br>Servicios especializados:<br>✅ Quality &amp; Quantity (Q&amp;Q) Surveys<br>✅ Loss Control &amp; Cargo Damage Surveys<br>✅ Bunker &amp; Draft Surveys<br>✅ Fiscal Control of Hydrocarbons<br>✅ Hold Cleanliness &amp; Readiness Inspections<br>✅ Slop Treatment &amp; Disposal Supervision<br>✅ Pre-load &amp; Post-discharge Surveys<br>✅ Ullage &amp; Sampling Operations<br><br><strong>Certificaciones:</strong> IFIA, ISO 9001:2015, ISO 17020<br><strong>Estándares:</strong> ASTM, API, IP<br><br>Trayectoria comprobada desde 2021. ⚓"
      },
      {
        keywords: ['shipmanagement', 'gestión de buques', 'gestión técnica', 'technical management', 'crew management', 'tripulación', 'ism', 'dry-dock', 'vetting', 'sire'],
        response: "🚢 <strong>SHIPMANAGEMENT &amp; TECHNICAL OPERATION</strong><br><br>Gestión integral de buques:<br>✅ Technical Management (ISM, PMS, Dry-dock)<br>✅ Crew Management &amp; Manning<br>✅ Classification Society Compliance<br>✅ Insurance Management (H&amp;M, P&amp;I)<br>✅ Flag State &amp; Port State Control<br>✅ Bunkering &amp; Fuel Management<br>✅ Maintenance &amp; Spare Parts Coordination<br>✅ Vetting &amp; SIRE Inspections<br><br>Gestionamos <strong>30+ buques</strong> y <strong>1,000+ marinos</strong>.<br>Operadores autorizados por <strong>NCB</strong> bajo bandera panameña. ⚓"
      },
      {
        keywords: ['fletamento', 'charter', 'chartering', 'brokerage', 'shipbroker', 'time charter', 'voyage charter', 'coa', 'bareboat', 'spot'],
        response: "⚓ <strong>CHARTERING &amp; SHIPBROKERING</strong><br><br>Modalidades de contrato:<br>✅ <strong>Time Charter (TC)</strong> — Arriendo por tiempo<br>✅ <strong>Voyage Charter (VC)</strong> — Arriendo por viaje<br>✅ <strong>Contract of Affreightment (COA)</strong> — Contrato de volumen<br>✅ <strong>Bareboat Charter</strong> — Arriendo a casco desnudo<br>✅ <strong>Spot Market</strong> — Contratos puntuales<br><br>Servicios adicionales:<br>✅ Voyage Estimates &amp; Market Analysis<br>✅ Demurrage, Deadfreight &amp; Laytime<br>✅ Sale &amp; Purchase (S&amp;P) Advisory<br><br>¿Necesita cotizar un fletamento? Contáctenos. ⚓"
      },
      {
        keywords: ['formulario', 'formato', 'plantilla', 'chartering form', 'charter form', 'descargar formulario', 'descargar pdf', 'necesito el formulario', 'dame el formulario'],
        response: "📄 <strong>FORMULARIO DE FLETAMENTO — VSC &amp; SUPPLY LLC</strong><br><br>Con gusto le comparto nuestro formulario oficial de Chartering. Incluye todos los datos requeridos:<br><br>• Tipo de buque requerido<br>• Datos del fletador, shipper, buyer y consignee<br>• Producto y cantidad (MT)<br>• Especificaciones físico-químicas<br>• Fechas de carga y frecuencia<br>• Puertos y restricciones<br>• EIN de la empresa<br><br><strong>Descárguelo aquí:</strong><br>👉 <a href='img/VSC_FORM.pdf' download='VSC_FORM.pdf' target='_blank' style='color: #00C2CB; text-decoration: underline; font-weight: 600;'>Descargar Formulario PDF</a><br><br>Una vez completado, envíelo a:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>Procesamos solicitudes en menos de 2 horas. ⚓"
      },
      {
        keywords: ['shipchandler', 'suministros', 'supply', 'provisiones', 'repuestos', 'lubricantes', 'agua dulce'],
        response: "🚢 <strong>SHIPCHANDLER &amp; MARINE SUPPLY</strong><br><br>Suministros integrales:<br>✅ Provisions (Fresh, Dry, Frozen)<br>✅ Deck, Engine &amp; Cabin Stores<br>✅ Lubricants &amp; Chemicals<br>✅ Spare Parts &amp; Technical Equipment<br>✅ Fresh Water &amp; Ballast<br>✅ Minor Repairs &amp; Technical Support<br>✅ Delivery Logistics &amp; Procurement<br>✅ Ship-to-Ship &amp; Port Delivery<br><br>Entregamos en puertos y fondeaderos de todo el mundo. 🌎"
      },
      {
        keywords: ['agencia', 'agency', 'puerto', 'port logistics', 'isps', 'crew change', 'aduanas'],
        response: "⚓ <strong>MARINE AGENCY &amp; PORT LOGISTICS</strong><br><br>Servicios portuarios:<br>✅ Port Agency &amp; Owner Representation<br>✅ Loading &amp; Discharge Supervision<br>✅ Crew Changes &amp; Immigration<br>✅ Customs Clearance &amp; Documentation<br>✅ Waste Management &amp; MARPOL Compliance<br>✅ ISPS Security &amp; Port Clearance<br>✅ Bunker &amp; Fresh Water Arrangements<br>✅ Emergency Response &amp; Port Fee Negotiation<br><br>Operamos en puertos estratégicos de todo el mundo. 🌎"
      },
      {
        keywords: ['commodity', 'trading', 'commodities', 'crudo', 'petróleo', 'diésel', 'químicos'],
        response: "🛢️ <strong>COMMODITY TRADING &amp; MOBILIZATION</strong><br><br>Productos que comerciamos:<br>🛢️ <strong>Crudo &amp; Slop</strong> — Tanqueros/Barcazas, ASTM/API<br>⛽ <strong>Diésel &amp; Fuel Oil</strong> — ISO 9001:2015<br>🧪 <strong>Químicos &amp; Contenedores</strong> — IFIA Certified<br>🌾 <strong>Agroalimentarios</strong> — Granel &amp; Refrigerado<br>⛏️ <strong>Minerales &amp; Metales</strong> — ISO/ASTM<br>📦 <strong>Contenedores &amp; Carga Proyecto</strong> — IMO/SOLAS<br><br>Operamos en mercados internacionales. ⚓"
      },
      {
        keywords: ['offshore', 'osv', 'aht', 'psv', 'rov', 'subsea', 'salvamento', 'remolque'],
        response: "🌊 <strong>OFFSHORE &amp; SPECIALIZED SERVICES</strong><br><br>Servicios especializados:<br>✅ Offshore Supply Vessels (OSV)<br>✅ Anchor Handling Tugs (AHT)<br>✅ Platform Supply Vessels (PSV)<br>✅ Subsea &amp; ROV Support<br>✅ Project Cargo &amp; Heavy Lift<br>✅ Salvage &amp; Emergency Response<br>✅ Towing &amp; Anchor Handling<br>✅ Wind Farm &amp; Renewable Support<br><br>Servicios para operaciones offshore de alta complejidad. ⚓"
      },
      {
        keywords: ['logística', 'marine logistics', 'ocean freight', 'fcl', 'lcl', 'contenedor', 'carga'],
        response: "🚢 <strong>MARINE LOGISTICS &amp; SEABORNE COORDINATION</strong><br><br>Coordinación logística marítima:<br>✅ Marine Freight Coordination (FCL / LCL)<br>✅ Ocean Freight Forwarding<br>✅ Cargo Consolidation &amp; Deconsolidation<br>✅ Customs Documentation &amp; Clearance<br>✅ Marine Cargo Insurance Advisory<br>✅ Port-to-Port Coordination<br>✅ Container &amp; Vessel Booking<br>✅ Bulk Carrier &amp; Tanker Coordination<br><br>Coordinación exclusivamente marítima a nivel global. ⚓"
      },
      {
        keywords: ['consulting', 'consultoría', 'advisory', 'auditoría', 'arbitraje', 'peritaje', 'due diligence'],
        response: "⚖️ <strong>MARINE CONSULTING &amp; ADVISORY</strong><br><br>Consultoría marítima:<br>✅ Technical &amp; Operational Audits<br>✅ Marine Casualty Investigation<br>✅ Insurance Claims Support<br>✅ Charter Party Disputes<br>✅ Expert Witness Testimony<br>✅ Due Diligence &amp; Vessel Valuation<br>✅ Regulatory &amp; Compliance Advisory<br>✅ Environmental Impact Assessment<br><br>Consultoría estratégica para armadores, operadores, aseguradoras y despachos legales. ⚓"
      },

      // === CERTIFICACIONES ===
      {
        keywords: ['certificaciones', 'ifia', 'iso', 'iso 9001', 'iso 17020', 'astm', 'api', 'ip', 'certificados'],
        response: "🏆 <strong>CERTIFICACIONES Y ESTÁNDARES</strong><br><br>Certificaciones:<br>✅ <strong>IFIA</strong> — International Federation of Inspection Agencies<br>✅ <strong>ISO 9001:2015</strong> — Quality Management<br>✅ <strong>ISO 17020</strong> — Inspection &amp; Certification<br>✅ <strong>ASTM</strong> — Petrochemical Standards<br>✅ <strong>API</strong> — American Petroleum Institute<br>✅ <strong>IP</strong> — Energy Institute<br><br>Nuestro personal cuenta con <strong>Petroleum Inspector Certification</strong> de IFIA. 🛡️"
      },
      {
        keywords: ['normativas', 'regulaciones', 'marpol', 'solas', 'mlc', 'imo', 'omi', 'convenios'],
        response: "🌊 <strong>NORMATIVAS INTERNACIONALES</strong><br><br>Cumplimos con:<br>✅ <strong>MARPOL</strong> — Prevención de la Contaminación (6 anexos)<br>✅ <strong>SOLAS</strong> — Seguridad de la Vida en el Mar<br>✅ <strong>ISM Code</strong> — Gestión de la Seguridad<br>✅ <strong>ISPS Code</strong> — Protección Marítima<br>✅ <strong>MLC 2006</strong> — Convenio sobre el Trabajo Marítimo<br>✅ <strong>IMO/OMI</strong> — Organización Marítima Internacional<br><br>Operamos bajo los más estrictos estándares globales. ⚓"
      },
      {
        keywords: ['ambiental', 'medio ambiente', 'sostenibilidad', 'ods', 'onu', 'océano', 'planeta', 'verde'],
        response: "🌊 <strong>COMPROMISO AMBIENTAL</strong><br><br>Alineado con:<br>✅ Políticas ONU para el cuidado del océano<br>✅ <strong>ODS 13</strong> (Acción por el Clima)<br>✅ <strong>ODS 14</strong> (Vida Submarina)<br>✅ Política de cero vertidos (MARPOL)<br>✅ Eficiencia energética<br>✅ Combustibles bajos en azufre<br>✅ Auditorías ambientales continuas<br><br><em>'Proteger el océano no es una opción, es nuestra responsabilidad.'</em> 🌊"
      },

      // === STATS ===
      {
        keywords: ['cuántos buques', 'flota', 'fleet', 'vessels', 'buques gestionados', 'número de buques'],
        response: "🚢 <strong>NUESTRA FLOTA</strong><br><br>Gestionamos más de <strong>30 buques</strong>:<br>🚢 Graneleros (Handysize a Capesize)<br>🚢 Portacontenedores<br>🚢 Tanqueros<br>🚢 Buques de proyecto<br>🚢 Multipropósito<br><br>Somos operadores autorizados por <strong>La Sociedad Clasificadora NCB</strong> bajo bandera panameña. ⚓"
      },
      {
        keywords: ['cuántos marinos', 'cuántos tripulantes', 'seafarers', 'crew'],
        response: "👨‍✈️ <strong>NUESTRO PERSONAL MARÍTIMO</strong><br><br>Gestionamos más de <strong>1,000 marinos</strong>:<br><br>👨‍✈️ Capitanes<br>👮 Oficiales<br>⚓ Tripulación<br><br>Todos calificados bajo los más altos estándares internacionales (STCW, MLC). 🚢"
      },

      // === COTIZACIONES ===
      {
        keywords: ['cotización', 'cotizar', 'precio', 'precios', 'tarifa', 'cuánto cuesta', 'presupuesto', 'cuánto cobran'],
        response: "💰 <strong>COTIZACIONES</strong><br><br>Con gusto le ayudo con su cotización. Necesito saber:<br><br>1️⃣ <strong>Servicio:</strong> ¿Inspección, fletamento, suministro, agencia?<br>2️⃣ <strong>Buque/Carga:</strong> Tipo y cantidad<br>3️⃣ <strong>Puerto(s):</strong> Origen y destino<br>4️⃣ <strong>Fechas:</strong> Aproximadas<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>Respondemos en menos de 2 horas. ⚓"
      },
      {
        keywords: ['métodos de pago', 'formas de pago', 'cómo pago', 'transferencia', 'aceptan tarjeta'],
        response: "💳 <strong>MÉTODOS DE PAGO</strong><br><br>Aceptamos:<br>✅ Transferencia bancaria internacional (wire transfer)<br>✅ Pago contra documentos<br>✅ Cartas de crédito (L/C)<br>✅ Otros métodos según contrato<br><br>Para coordinar el pago, contáctenos:<br>📧 ceo@vsc.supply ⚓"
      },

      // === CONOCIMIENTO MARÍTIMO ===
      {
        keywords: ['panamax', 'capesize', 'handysize', 'handymax', 'tipos de buques', 'tipo de barco'],
        response: "🚢 <strong>Tipos de buques graneleros por tamaño:</strong><br><br>🚢 <strong>Handysize</strong> — 10,000-35,000 DWT (versátiles)<br>🚢 <strong>Handymax</strong> — 35,000-50,000 DWT<br>🚢 <strong>Panamax</strong> — 60,000-80,000 DWT (caben por Canal de Panamá)<br>🚢 <strong>Kamsarmax</strong> — hasta 82,000 DWT<br>🚢 <strong>Capesize</strong> — 100,000-200,000 DWT (deben rodear Cabo de Buena Esperanza o Cabo de Hornos)<br><br>En VSC &amp; SUPPLY LLC trabajamos con todos los tamaños. ⚓"
      },
      {
        keywords: ['qué es dwt', 'dwt', 'deadweight', 'tonelaje'],
        response: "<strong>DWT</strong> (Deadweight Tonnage) es la capacidad de carga total de un buque, medida en toneladas.<br><br>Incluye:<br>• Carga<br>• Combustible<br>• Agua dulce<br>• Lastre<br>• Provisiones<br>• Tripulación y efectos<br><br>Es el peso máximo que el buque puede transportar de forma segura. ⚓"
      },
      {
        keywords: ['qué es teu', 'teu', 'twenty-foot'],
        response: "<strong>TEU</strong> (Twenty-foot Equivalent Unit) es una unidad de medida usada en el transporte de contenedores.<br><br>1 TEU = 1 contenedor estándar de 20 pies<br>1 FEU = 1 contenedor de 40 pies = 2 TEU<br><br>Los portacontenedores se miden por su capacidad en TEU (ej: 8,500 TEU). 🚢"
      },
      {
        keywords: ['bunkering', 'bunker', 'qué es bunkering', 'combustible'],
        response: "<strong>Bunkering</strong> es el suministro de combustible a buques.<br><br>Tipos principales:<br>⛽ <strong>VLSFO</strong> — Very Low Sulphur Fuel Oil (≤0.5% azufre)<br>⛽ <strong>MGO</strong> — Marine Gas Oil (zonas ECA)<br>⛽ <strong>HFO</strong> — Heavy Fuel Oil (con scrubbers)<br>⛽ <strong>LNG</strong> — Gas Natural Licuado (futuro)<br><br>Coordinamos bunkering global con ISO 9001:2015. ⚓"
      },
      {
        keywords: ['qué es imo', 'imo', 'omi', 'organización marítima internacional'],
        response: "<strong>IMO</strong> (International Maritime Organization) / <strong>OMI</strong> es la Organización Marítima Internacional.<br><br>Es el organismo especializado de la ONU que regula:<br>• Seguridad marítima<br>• Prevención de contaminación<br>• Formación de marinos<br>• Responsabilidad e indemnización<br><br>Todas nuestras operaciones cumplen con los estándares IMO. ⚓"
      },
      {
        keywords: ['flag state', 'bandera', 'estado de bandera', 'panamá', 'panama'],
        response: "<strong>Estado de Bandera (Flag State)</strong> es el país donde está registrado un buque.<br><br>Sus responsabilidades:<br>• Certificar el buque<br>• Inspeccionar periódicamente<br>• Emitir documentación<br>• Aplicar convenios internacionales<br><br>Operamos buques bajo varias banderas, incluyendo la panameña 🇵🇦 a través de NCB. ⚓"
      },
      {
        keywords: ['ncb', 'sociedad de clasificación', 'class society', 'clasificación'],
        response: "<strong>Sociedad de Clasificación</strong> es una organización privada que:<br><br>🔧 Establece estándares técnicos<br>📋 Inspecciona buques<br>📜 Emite certificados de clase<br>🛡️ Verifica cumplimiento estructural<br><br>Trabajamos con <strong>La Sociedad Clasificadora NCB</strong> bajo bandera panameña. ⚓"
      },

      // === CONSULTAS ESPECÍFICAS ===
      {
        keywords: ['trabajan con petroleras', 'clientes', 'quiénes son sus clientes', 'traders'],
        response: "Trabajamos con una amplia gama de clientes internacionales:<br><br>🛢️ <strong>Traders internacionales de petróleo</strong><br>🚢 <strong>Armadores y operadores</strong><br>🏭 <strong>Grandes empresas de commodities</strong><br>🔒 <strong>Aseguradoras marítimas</strong><br>⚖️ <strong>Despachos legales marítimos</strong><br>🏗️ <strong>Empresas de proyectos offshore</strong><br><br>Nuestro equipo de Cargo Control tiene trayectoria comprobada con <em>leading international oil traders and majors</em> desde 2021. ⚓"
      },
      {
        keywords: ['ofrecen empleo', 'vacantes', 'empleo', 'trabajo', 'curriculum', 'cv', 'marino buscando empleo'],
        response: "👨‍✈️ <strong>OPORTUNIDADES PROFESIONALES</strong><br><br>Constantemente buscamos profesionales marítimos calificados:<br><br>• Capitanes (Master)<br>• Jefes de Máquinas (Chief Engineer)<br>• Oficiales de Puente y Máquinas<br>• Tripulación certificada STCW<br>• Personal corporativo<br><br>Envíe su CV a:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓"
      },
      {
        keywords: ['oficinas', 'sucursales', 'representaciones', 'agentes', 'red global', 'dónde tienen oficinas'],
        response: "🌎 <strong>NUESTRA RED</strong><br><br>Oficina corporativa:<br>📍 Hollywood, Florida, USA<br><br>Red de colaboradores y agentes:<br>🌎 América (Norte, Centro, Sur)<br>🌍 Europa y África<br>🌏 Asia y Medio Oriente<br><br>Trabajamos con agentes locales en los principales puertos del mundo. ⚓"
      },
      {
        keywords: ['reunión', 'cita', 'agendar', 'reunión', 'puedo visitar'],
        response: "📅 <strong>VISITAS Y REUNIONES</strong><br><br>Puede agendar una reunión con nuestro equipo:<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>También puede visitarnos en:<br>🏢 2165 Van Buren St, Suite 911<br>Hollywood, FL 33020, USA<br><br>Recomendamos agendar con anticipación. ⚓"
      },

      // === PROBLEMAS ===
      {
        keywords: ['problema', 'urgente', 'emergencia', 'sos', 'ayuda urgente', 'asistencia inmediata'],
        response: "🚨 <strong>ASISTENCIA URGENTE 24/7</strong><br><br>Para emergencias marítimas, contáctenos de inmediato:<br><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>📧 <strong>Email:</strong> ceo@vsc.supply<br><br>Nuestro equipo de Emergency Response está disponible 24/7 para:<br>• Salvamento marítimo<br>• Averías y daños<br>• Asistencia portuaria urgente<br>• Coordinación con autoridades<br><br>¡Contáctenos ahora! ⚓"
      },
      {
        keywords: ['reclamación', 'reclamo', 'queja', 'insatisfacción', 'complaint'],
        response: "Lamentamos escuchar su insatisfacción. Su opinión es muy importante.<br><br>Por favor envíenos:<br>1️⃣ <strong>Detalles del problema</strong><br>2️⃣ <strong>Número de referencia</strong> (si aplica)<br>3️⃣ <strong>Evidencia</strong> (fotos, documentos)<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841<br><br>Responderemos en menos de 24 horas. ⚓"
      },
      {
        keywords: ['seguimiento', 'estado de mi pedido', 'dónde está mi carga', 'track', 'tracking', 'rastreo'],
        response: "📡 <strong>RASTREO Y SEGUIMIENTO</strong><br><br>Para conocer el estado de su operación:<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>Indíquenos:<br>• Número de contrato o referencia<br>• Nombre del buque<br>• Puerto de salida<br><br>Le enviaremos un update. ⚓"
      },

      // === SALUDOS ===
      {
        keywords: ['hola', 'buenas', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos', 'qué tal', 'buen día'],
        response: "¡Hola! 👋 Bienvenido a <strong>VSC &amp; SUPPLY LLC</strong>.<br><br>Soy <strong>Victoria</strong>, su asistente virtual. ¿En qué puedo ayudarle hoy?<br><br>Puedo responder sobre:<br>• 🚢 Nuestros servicios<br>• 🛡️ Certificaciones<br>• 👨‍✈️ Equipo directivo<br>• 📧 Contacto<br>• 💰 Cotizaciones<br>• 📄 Descarga de formularios<br>• Y mucho más ⚓"
      },
      {
        keywords: ['gracias', 'agradezco', 'thanks', 'muy amable'],
        response: "¡Con mucho gusto! 😊<br><br>Estoy aquí si necesita algo más. Recuerde que puede contactar a nuestro equipo 24/7:<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓"
      },
      {
        keywords: ['adiós', 'chao', 'hasta luego', 'bye', 'nos vemos', 'hasta pronto'],
        response: "¡Hasta pronto! 🌊<br><br>Que tenga buen viento y buena mar. Si necesita algo, aquí estaré. ⚓"
      },
      {
        keywords: ['quién eres', 'tu nombre', 'cómo te llamas', 'eres un bot', 'eres una ia'],
        response: "Soy <strong>Victoria</strong>, la asistente virtual de VSC &amp; SUPPLY LLC.<br><br>Estoy aquí para ayudarle 24/7 con información sobre:<br>• Nuestros servicios<br>• Certificaciones<br>• Contacto<br>• Cotizaciones<br>• Descarga de formularios<br>• Y más<br><br>¿En qué puedo ayudarle? ⚓"
      },
      {
        keywords: ['qué puedes hacer', 'ayuda', 'qué información tienes', 'qué temas manejas'],
        response: "🤖 <strong>PUEDO AYUDARLE CON:</strong><br><br>⚓ <strong>VSC &amp; SUPPLY LLC</strong> — historia, misión, ubicación<br>🚢 <strong>Servicios</strong> — las 9 unidades de negocio<br>🛡️ <strong>Certificaciones</strong> — IFIA, ISO, ASTM, API<br>🌊 <strong>Normativas</strong> — MARPOL, SOLAS, ISM, ISPS, MLC<br>👨‍✈️ <strong>Equipo</strong> — CEO, Vice Chairman, IT Manager<br>📧 <strong>Contacto</strong> — email, WhatsApp<br>💰 <strong>Cotizaciones</strong> — información y proceso<br>📄 <strong>Formularios</strong> — descarga del Chartering Form<br>📊 <strong>Cifras</strong> — buques, marinos, años<br><br>¿Sobre qué le gustaría saber? 🚢"
      },

      // === FUERA DE TEMA ===
      {
        keywords: ['clima', 'tiempo', 'weather', 'temperatura'],
        response: "No tengo información meteorológica en tiempo real, pero puedo recomendarle:<br><br>🌤️ <strong>Windy.com</strong> — Vientos y clima marino<br>🌊 <strong>NOAA</strong> — Pronósticos oficiales USA<br>🚢 <strong>PassageWeather</strong> — Rutas marítimas<br><br>Para consultas sobre operaciones marítimas, estoy a su disposición. ⚓"
      },
      {
        keywords: ['chiste', 'algo gracioso', 'broma', 'joke'],
        response: "😄 ¿Sabía que los marinos nunca dicen 'buenos días' dos veces?<br><br>Porque después del primer 'buenos días'... ¡ya es de día!<br><br>Ahora en serio, ¿en qué puedo ayudarle sobre VSC &amp; SUPPLY LLC? ⚓"
      }
    ],

    en: [
      { keywords: ['what is vsc', 'about the company', 'who are you', 'company', 'business', 'activity', 'sector'], response: "🚢 <strong>VSC &amp; SUPPLY LLC</strong><br><br>We're a global maritime company founded in <strong>2021</strong>, headquartered in Hollywood, Florida. Our slogan is <strong>'Certainty &amp; Excellence at Sea'</strong>.<br><br>We offer end-to-end maritime services: certified inspections, shipmanagement of 30+ vessels, global chartering, marine supplies, 24/7 port agency, commodity trading, offshore services, marine logistics and consulting.<br><br>We manage <strong>30+ vessels</strong> and <strong>1,000+ seafarers</strong>. ⚓" },
      { keywords: ['company name', 'legal name', 'full name'], response: "Our full legal name is: <strong>VSC &amp; SUPPLY LLC</strong><br><br>Registered as an LLC in the United States. ⚓" },
      { keywords: ['slogan', 'motto', 'tagline'], response: "Our official slogan is:<br><br><strong>\"Certainty &amp; Excellence at Sea\"</strong><br><br>It reflects our commitment to operational safety and the highest quality standards. ⚓🌊" },
      { keywords: ['where are you', 'location', 'office', 'address', 'headquarters', 'hollywood', 'florida'], response: "📍 <strong>Corporate Office:</strong><br>2165 Van Buren St, Suite 911<br>Hollywood, FL 33020<br>United States 🇺🇸<br><br>We operate globally. 🌎" },
      { keywords: ['contact', 'how to contact', 'phone', 'email', 'whatsapp'], response: "📞 <strong>Contact channels 24/7:</strong><br><br>📧 <strong>Email:</strong> ceo@vsc.supply<br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>🏢 <strong>Office:</strong> 2165 Van Buren St, Suite 911, Hollywood, FL 33020 ⚓" },
      { keywords: ['email', 'mail'], response: "You can write to us at:<br><br>📧 <strong>ceo@vsc.supply</strong><br><br>We respond within 2 hours. ⚓" },
      { keywords: ['phone', 'whatsapp', 'call'], response: "You can reach us via:<br><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br><br>Available 24/7. ⚓" },
      { keywords: ['hours', 'available', '24/7'], response: "We're available <strong>24/7</strong>, 365 days a year. ⚓🌊" },
      { keywords: ['when founded', 'history', 'origin'], response: "VSC &amp; SUPPLY LLC was founded in <strong>2021</strong>.<br><br>Since then we've built a proven track record with 30+ vessels managed, 1,000+ seafarers and operations across major global trade corridors. ⚓" },
      { keywords: ['ceo', 'president', 'chairman', 'founder'], response: "👨‍✈️ <strong>Capt. Victor Vielma</strong><br><strong>CEO &amp; Chairman</strong><br><br>A captain with more than two decades of experience.<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓" },
      { keywords: ['lorena', 'vice chairman'], response: "💼 <strong>Lorena Vielma</strong><br><strong>Vice Chairman</strong><br><br>Responsible for commercial strategy, international alliances and the expansion of our global network. ⚓" },
      { keywords: ['javier', 'it manager'], response: "💻 <strong>V. Javier Vielma</strong><br><strong>IT Manager</strong><br><br>Directs our technological infrastructure, cybersecurity and digital systems globally. ⚓" },
      { keywords: ['leadership team', 'management team'], response: "Our leadership team includes:<br><br>👨‍✈️ <strong>Capt. Victor Vielma</strong> — CEO &amp; Chairman<br>💼 <strong>Lorena Vielma</strong> — Vice Chairman<br>💻 <strong>V. Javier Vielma</strong> — IT Manager 🚢" },
      { keywords: ['services', 'what do you offer'], response: "We offer <strong>9 specialized business units</strong>:<br><br>1️⃣ Inspections &amp; Quality Control<br>2️⃣ Shipmanagement &amp; Technical Operation<br>3️⃣ Chartering &amp; Shipbrokering<br>4️⃣ Shipchandler &amp; Marine Supply<br>5️⃣ Marine Agency &amp; Port Logistics<br>6️⃣ Commodity Trading<br>7️⃣ Offshore &amp; Specialized Services<br>8️⃣ Marine Logistics &amp; Seaborne Coordination<br>9️⃣ Marine Consulting &amp; Advisory 🚢" },
      { keywords: ['inspection', 'q&q', 'survey', 'cargo control'], response: "🛡️ <strong>INSPECTIONS &amp; QUALITY CONTROL</strong><br><br>✅ Quality &amp; Quantity (Q&amp;Q) Surveys<br>✅ Loss Control &amp; Cargo Damage Surveys<br>✅ Bunker &amp; Draft Surveys<br>✅ Fiscal Control of Hydrocarbons<br>✅ Hold Cleanliness Inspections<br>✅ Slop Treatment Supervision<br>✅ Pre-load &amp; Post-discharge Surveys<br>✅ Ullage &amp; Sampling Operations<br><br>Certifications: IFIA, ISO 9001:2015, ISO 17020 ⚓" },
      { keywords: ['shipmanagement', 'technical management', 'crew management', 'ism'], response: "🚢 <strong>SHIPMANAGEMENT &amp; TECHNICAL OPERATION</strong><br><br>✅ Technical Management (ISM, PMS, Dry-dock)<br>✅ Crew Management &amp; Manning<br>✅ Classification Society Compliance<br>✅ Insurance Management (H&amp;M, P&amp;I)<br>✅ Flag State &amp; Port State Control<br>✅ Bunkering &amp; Fuel Management<br>✅ Maintenance &amp; Spare Parts<br>✅ Vetting &amp; SIRE Inspections ⚓" },
      { keywords: ['chartering', 'charter', 'brokerage', 'time charter', 'voyage charter', 'coa', 'bareboat'], response: "⚓ <strong>CHARTERING &amp; SHIPBROKERING</strong><br><br>✅ Time Charter (TC)<br>✅ Voyage Charter (VC)<br>✅ Contract of Affreightment (COA)<br>✅ Bareboat Charter<br>✅ Spot Market Contracts ⚓" },
      { keywords: ['form', 'charter form', 'download', 'form pdf'], response: "📄 <strong>CHARTERING FORM</strong><br><br>Download our official Chartering form:<br><br>👉 <a href='img/VSC_FORM.pdf' download='VSC_FORM.pdf' target='_blank' style='color: #00C2CB; text-decoration: underline; font-weight: 600;'>Download Chartering Form (PDF)</a><br><br>Send it to:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['supply', 'shipchandler', 'provisions'], response: "🚢 <strong>SHIPCHANDLER &amp; MARINE SUPPLY</strong><br><br>✅ Provisions (Fresh, Dry, Frozen)<br>✅ Deck, Engine &amp; Cabin Stores<br>✅ Lubricants &amp; Chemicals<br>✅ Spare Parts &amp; Equipment<br>✅ Fresh Water &amp; Ballast<br>✅ Minor Repairs<br>✅ Delivery Logistics<br>✅ Ship-to-Ship Delivery 🌎" },
      { keywords: ['agency', 'port logistics', 'isps'], response: "⚓ <strong>MARINE AGENCY &amp; PORT LOGISTICS</strong><br><br>✅ Port Agency &amp; Owner Representation<br>✅ Loading &amp; Discharge Supervision<br>✅ Crew Changes &amp; Immigration<br>✅ Customs Clearance<br>✅ Waste Management<br>✅ ISPS Security<br>✅ Bunker &amp; Fresh Water<br>✅ Emergency Response 🌎" },
      { keywords: ['commodity', 'trading', 'crude', 'diesel'], response: "🛢️ <strong>COMMODITY TRADING</strong><br><br>🛢️ Crude Oil &amp; Slop<br>⛽ Diesel &amp; Fuel Oil<br>🧪 Chemicals &amp; Containers<br>🌾 Agri-Food Commodities<br>⛏️ Minerals &amp; Metals<br>📦 Containers &amp; Project Cargo ⚓" },
      { keywords: ['offshore', 'osv', 'rov', 'subsea'], response: "🌊 <strong>OFFSHORE &amp; SPECIALIZED</strong><br><br>✅ Offshore Supply Vessels (OSV)<br>✅ Anchor Handling Tugs (AHT)<br>✅ Platform Supply Vessels (PSV)<br>✅ Subsea &amp; ROV Support<br>✅ Project Cargo &amp; Heavy Lift<br>✅ Salvage &amp; Emergency Response<br>✅ Towing &amp; Anchor Handling<br>✅ Wind Farm Support ⚓" },
      { keywords: ['logistics', 'fcl', 'lcl', 'ocean freight'], response: "🚢 <strong>MARINE LOGISTICS</strong><br><br>✅ Marine Freight Coordination (FCL / LCL)<br>✅ Ocean Freight Forwarding<br>✅ Cargo Consolidation<br>✅ Customs Documentation<br>✅ Marine Cargo Insurance<br>✅ Port-to-Port Coordination<br>✅ Container &amp; Vessel Booking<br>✅ Bulk Carrier &amp; Tanker Coordination ⚓" },
      { keywords: ['consulting', 'advisory', 'audit'], response: "⚖️ <strong>MARINE CONSULTING</strong><br><br>✅ Technical &amp; Operational Audits<br>✅ Marine Casualty Investigation<br>✅ Insurance Claims Support<br>✅ Charter Party Disputes<br>✅ Expert Witness Testimony<br>✅ Due Diligence &amp; Valuation<br>✅ Regulatory Advisory<br>✅ Environmental Impact Assessment ⚓" },
      { keywords: ['certifications', 'ifia', 'iso', 'astm', 'api'], response: "🏆 <strong>CERTIFICATIONS</strong><br><br>✅ IFIA<br>✅ ISO 9001:2015<br>✅ ISO 17020<br>✅ ASTM<br>✅ API<br>✅ IP<br><br>Our staff holds the Petroleum Inspector Certification from IFIA. 🛡️" },
      { keywords: ['regulations', 'marpol', 'solas', 'mlc', 'imo'], response: "🌊 <strong>INTERNATIONAL REGULATIONS</strong><br><br>✅ MARPOL<br>✅ SOLAS<br>✅ ISM Code<br>✅ ISPS Code<br>✅ MLC 2006<br>✅ IMO ⚓" },
      { keywords: ['environmental', 'sustainability', 'sdg', 'un'], response: "🌊 <strong>ENVIRONMENTAL COMMITMENT</strong><br><br>✅ UN policies for ocean care<br>✅ SDG 13 (Climate Action)<br>✅ SDG 14 (Life Below Water)<br>✅ Zero discharge policy<br>✅ Energy efficiency<br>✅ Low-sulphur fuels 🌊" },
      { keywords: ['how many vessels', 'fleet'], response: "🚢 <strong>OUR FLEET</strong><br><br>We manage more than <strong>30 vessels</strong>:<br>🚢 Bulkers<br>🚢 Container Ships<br>🚢 Tankers<br>🚢 Project Carriers<br>🚢 Multipurpose ⚓" },
      { keywords: ['how many seafarers', 'crew'], response: "👨‍✈️ <strong>OUR SEAFARERS</strong><br><br>More than <strong>1,000 seafarers</strong>:<br><br>👨‍✈️ Captains<br>👮 Officers<br>⚓ Crew 🚢" },
      { keywords: ['quote', 'price', 'how much', 'cost'], response: "💰 <strong>QUOTATIONS</strong><br><br>To give you the best rate, I need:<br>1️⃣ Service type<br>2️⃣ Vessel/cargo details<br>3️⃣ Port(s)<br>4️⃣ Approximate dates<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['payment methods', 'how to pay'], response: "💳 <strong>PAYMENT METHODS</strong><br><br>✅ International wire transfer<br>✅ Payment against documents<br>✅ Letters of credit (L/C)<br>✅ Other methods by contract ⚓" },
      { keywords: ['panamax', 'capesize', 'vessel types'], response: "🚢 <strong>Bulk carrier types:</strong><br><br>🚢 Handysize — 10,000-35,000 DWT<br>🚢 Handymax — 35,000-50,000 DWT<br>🚢 Panamax — 60,000-80,000 DWT<br>🚢 Kamsarmax — up to 82,000 DWT<br>🚢 Capesize — 100,000-200,000 DWT ⚓" },
      { keywords: ['dwt', 'deadweight'], response: "<strong>DWT</strong> (Deadweight Tonnage) is a vessel's total carrying capacity in tons. ⚓" },
      { keywords: ['teu'], response: "<strong>TEU</strong> (Twenty-foot Equivalent Unit) is the unit for container transport. 1 TEU = 1 standard 20-foot container. 🚢" },
      { keywords: ['bunkering', 'bunker'], response: "<strong>Bunkering</strong> is the supply of fuel to vessels:<br>⛽ VLSFO (≤0.5% sulphur)<br>⛽ MGO (ECA zones)<br>⛽ HFO<br>⛽ LNG ⚓" },
      { keywords: ['imo', 'flag state', 'ncb'], response: "<strong>IMO</strong> is the UN's specialized agency for maritime safety. All our operations comply with IMO standards. ⚓" },
      { keywords: ['clients', 'work with oil companies'], response: "We work with:<br>🛢️ International oil traders<br>🚢 Shipowners and operators<br>🏭 Major commodity companies<br>🔒 Marine insurers<br>⚖️ Maritime law firms ⚓" },
      { keywords: ['jobs', 'careers', 'cv', 'resume'], response: "👨‍✈️ <strong>CAREER OPPORTUNITIES</strong><br><br>Send your CV to:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓" },
      { keywords: ['offices', 'global network'], response: "🌎 <strong>OUR NETWORK</strong><br><br>Corporate office:<br>📍 Hollywood, Florida, USA<br><br>Agents in Americas, Europe, Africa, Asia, Middle East. ⚓" },
      { keywords: ['meeting', 'visit', 'appointment'], response: "📅 Schedule a meeting:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['problem', 'urgent', 'emergency', 'sos'], response: "🚨 <strong>URGENT ASSISTANCE 24/7</strong><br><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>📧 <strong>Email:</strong> ceo@vsc.supply ⚓" },
      { keywords: ['complaint', 'claim'], response: "Please send us:<br>1️⃣ Issue details<br>2️⃣ Reference number<br>3️⃣ Evidence<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓" },
      { keywords: ['tracking', 'track', 'order status'], response: "📡 <strong>TRACKING</strong><br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['hi', 'hello', 'hey', 'greetings'], response: "Hi! 👋 Welcome to <strong>VSC &amp; SUPPLY LLC</strong>.<br><br>I'm <strong>Victoria</strong>, your virtual assistant. How can I help you today? ⚓" },
      { keywords: ['thanks', 'thank you'], response: "You're very welcome! 😊<br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['bye', 'goodbye', 'see you'], response: "Goodbye! 🌊<br><br>Fair winds and following seas. ⚓" },
      { keywords: ['who are you', 'your name'], response: "I'm <strong>Victoria</strong>, the virtual assistant of VSC &amp; SUPPLY LLC. ⚓" },
      { keywords: ['what can you do', 'help'], response: "🤖 I can help with:<br>⚓ VSC &amp; SUPPLY LLC info<br>🚢 Services<br>🛡️ Certifications<br>🌊 Regulations<br>👨‍✈️ Team<br>📧 Contact<br>💰 Quotes<br>📄 Forms<br>📊 Stats 🚢" },
      { keywords: ['weather', 'climate'], response: "I don't have real-time weather information, but I can recommend Windy.com, NOAA, and PassageWeather. ⚓" },
      { keywords: ['joke'], response: "😄 Did you know sailors never say 'good morning' twice? Because after the first one... it's already day! ⚓" }
    ],

    zh: [
      { keywords: ['什么是 vsc', '关于公司', '你们是谁', '公司', '业务', '活动'], response: "🚢 <strong>VSC &amp; SUPPLY LLC</strong><br><br>我们是一家全球海事公司，成立于 <strong>2021 年</strong>，总部位于佛罗里达州好莱坞。我们的标语是 <strong>'Certainty &amp; Excellence at Sea'</strong>。<br><br>我们提供端到端海事服务，管理 <strong>30+ 艘船舶</strong>和 <strong>1,000+ 名船员</strong>。⚓" },
      { keywords: ['公司名称', '法定名称', '全称'], response: "我们的完整法定名称是：<strong>VSC &amp; SUPPLY LLC</strong><br><br>在美国注册为 LLC。⚓" },
      { keywords: ['标语', '口号', 'slogan'], response: "我们的官方标语是：<strong>\"Certainty &amp; Excellence at Sea\"</strong> ⚓🌊" },
      { keywords: ['你们在哪里', '位置', '办公室', '地址', '总部'], response: "📍 <strong>公司办公室：</strong><br>2165 Van Buren St, Suite 911<br>Hollywood, FL 33020<br>United States 🇺🇸 🌎" },
      { keywords: ['如何联系', '联系方式', '联系电话', '邮箱', 'whatsapp'], response: "📞 <strong>全天候联系渠道：</strong><br><br>📧 <strong>电子邮件：</strong> ceo@vsc.supply<br>📱 <strong>WhatsApp：</strong> +1 334 763 3841<br>🏢 <strong>办公室：</strong> 2165 Van Buren St, Suite 911, Hollywood, FL 33020 ⚓" },
      { keywords: ['邮箱', '邮件'], response: "您可以写邮件到：<strong>ceo@vsc.supply</strong><br><br>我们会在 2 小时内回复。⚓" },
      { keywords: ['电话', 'whatsapp'], response: "我们的 WhatsApp 是：<strong>+1 334 763 3841</strong> ⚓" },
      { keywords: ['营业时间', '工作时间', '全天候'], response: "我们 <strong>全天候</strong>服务，全年 365 天。⚓🌊" },
      { keywords: ['什么时候成立', '成立时间', '历史'], response: "VSC &amp; SUPPLY LLC 成立于 <strong>2021 年</strong>。⚓" },
      { keywords: ['谁是 ceo', 'ceo', '董事长'], response: "👨‍✈️ <strong>Capt. Victor Vielma</strong><br><strong>董事长兼首席执行官</strong><br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp：+1 334 763 3841 ⚓" },
      { keywords: ['lorena', '副董事长'], response: "💼 <strong>Lorena Vielma</strong> — 副董事长 ⚓" },
      { keywords: ['javier', 'it 经理'], response: "💻 <strong>V. Javier Vielma</strong> — IT 经理 ⚓" },
      { keywords: ['领导团队', '管理团队'], response: "我们的领导团队：<br>👨‍✈️ Capt. Victor Vielma — 董事长兼 CEO<br>💼 Lorena Vielma — 副董事长<br>💻 V. Javier Vielma — IT 经理 🚢" },
      { keywords: ['什么服务', '服务', '业务领域'], response: "我们提供 <strong>9 个专业业务部门</strong>：<br>1️⃣ 检验与质量控制<br>2️⃣ 船舶管理与技术运营<br>3️⃣ 租船与船舶经纪<br>4️⃣ 船舶供应商与海事供应<br>5️⃣ 海事代理与港口物流<br>6️⃣ 大宗商品贸易<br>7️⃣ 海上作业与专业服务<br>8️⃣ 海运物流与海上协调<br>9️⃣ 海事咨询与顾问 🚢" },
      { keywords: ['检验', 'q&q', '货物控制'], response: "🛡️ <strong>检验与质量控制</strong><br>✅ Q&amp;Q 检验<br>✅ 损失控制<br>✅ 加油与吃水检验<br>✅ 财政控制<br>✅ 货舱清洁检验<br>✅ 污油处理监督 ⚓" },
      { keywords: ['船舶管理', '技术管理'], response: "🚢 <strong>船舶管理与技术运营</strong><br>✅ 技术管理（ISM、PMS、干船坞）<br>✅ 船员管理<br>✅ 船级社合规<br>✅ 保险管理<br>✅ 加油与燃料管理 ⚓" },
      { keywords: ['租船', 'charter', '期租', '程租'], response: "⚓ <strong>租船与船舶经纪</strong><br>✅ 期租（TC）<br>✅ 程租（VC）<br>✅ 包运合同（COA）<br>✅ 光租<br>✅ 即期合同 ⚓" },
      { keywords: ['表格', '租船表格', '下载表格'], response: "📄 <strong>租船表格</strong><br><br>👉 <a href='img/VSC_FORM.pdf' download='VSC_FORM.pdf' target='_blank' style='color: #00C2CB; text-decoration: underline; font-weight: 600;'>下载租船表格 (PDF)</a><br><br>发送至：<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp：</strong> +1 334 763 3841 ⚓" },
      { keywords: ['供应', '伙食', '备件'], response: "🚢 <strong>船舶供应商与海事供应</strong><br>✅ 伙食<br>✅ 甲板、机舱用品<br>✅ 润滑油与化学品<br>✅ 备件与技术设备<br>✅ 淡水与压载水<br>✅ 小修与技术支持 🌎" },
      { keywords: ['代理', '港口', 'isps'], response: "⚓ <strong>海事代理与港口物流</strong><br>✅ 港口代理<br>✅ 装卸监督<br>✅ 船员更换<br>✅ 海关清关<br>✅ ISPS 安保 🌎" },
      { keywords: ['大宗', '贸易', '原油'], response: "🛢️ <strong>大宗商品贸易</strong><br>🛢️ 原油与污油<br>⛽ 柴油与燃料油<br>🧪 化学品<br>🌾 农食商品 ⚓" },
      { keywords: ['海上作业', 'osv', 'rov'], response: "🌊 <strong>海上作业与专业服务</strong><br>✅ OSV、AHT、PSV<br>✅ 海底与 ROV<br>✅ 项目货与重吊<br>✅ 打捞与应急响应 ⚓" },
      { keywords: ['物流', 'fcl', 'lcl'], response: "🚢 <strong>海运物流</strong><br>✅ FCL/LCL<br>✅ 海运货代<br>✅ 拼箱与拆箱<br>✅ 海关文件 ⚓" },
      { keywords: ['咨询', '审计'], response: "⚖️ <strong>海事咨询</strong><br>✅ 技术与运营审计<br>✅ 事故调查<br>✅ 保险索赔<br>✅ 专家证人 ⚓" },
      { keywords: ['认证', 'ifia', 'iso'], response: "🏆 <strong>认证</strong><br>✅ IFIA<br>✅ ISO 9001:2015<br>✅ ISO 17020<br>✅ ASTM<br>✅ API<br>✅ IP 🛡️" },
      { keywords: ['法规', 'marpol', 'solas', 'imo'], response: "🌊 <strong>国际法规</strong><br>✅ MARPOL<br>✅ SOLAS<br>✅ ISM<br>✅ ISPS<br>✅ MLC 2006<br>✅ IMO ⚓" },
      { keywords: ['环境', '可持续', 'sdg'], response: "🌊 <strong>环境承诺</strong><br>✅ 联合国海洋政策<br>✅ SDG 13 气候行动<br>✅ SDG 14 水下生物<br>✅ 零排放 🌊" },
      { keywords: ['多少艘船', '船队'], response: "🚢 我们管理超过 <strong>30 艘船舶</strong>。⚓" },
      { keywords: ['多少船员'], response: "👨‍✈️ 我们在全球管理超过 <strong>1,000 名船员</strong>。🚢" },
      { keywords: ['报价', '价格'], response: "💰 很高兴为您提供报价。我需要了解服务类型、船舶/货物、港口和日期。<br><br>📧 ceo@vsc.supply<br>📱 +1 334 763 3841 ⚓" },
      { keywords: ['付款', '支付'], response: "💳 我们接受国际电汇、凭单据付款、信用证（L/C）。⚓" },
      { keywords: ['巴拿马型', '好望角型', '船舶类型'], response: "🚢 主要散货船类型：<br>🚢 灵便型（10,000-35,000 DWT）<br>🚢 大灵便型（35,000-50,000 DWT）<br>🚢 巴拿马型（60,000-80,000 DWT）<br>🚢 好望角型（100,000-200,000 DWT）⚓" },
      { keywords: ['dwt'], response: "<strong>DWT</strong>（载重吨）是船舶的总载货能力。⚓" },
      { keywords: ['teu'], response: "<strong>TEU</strong>（二十英尺标准箱）是集装箱运输的计量单位。🚢" },
      { keywords: ['加油', 'bunker'], response: "<strong>加油</strong>是为船舶供应燃料，包括 VLSFO、MGO、HFO 和 LNG。⚓" },
      { keywords: ['imo'], response: "<strong>IMO</strong> 是联合国负责海上安全的专门机构。⚓" },
      { keywords: ['客户'], response: "我们的客户包括国际石油贸易商、船东、大宗商品公司、保险公司和律师事务所。⚓" },
      { keywords: ['招聘', '工作'], response: "👨‍✈️ 请将简历发送至：<strong>ceo@vsc.supply</strong> ⚓" },
      { keywords: ['办公室', '网络'], response: "🌎 公司办公室位于佛罗里达州好莱坞。我们与美洲、欧洲、非洲、亚洲和中东的代理合作。⚓" },
      { keywords: ['预约', '会议'], response: "📅 📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp：</strong> +1 334 763 3841 ⚓" },
      { keywords: ['问题', '紧急'], response: "🚨 <strong>全天候紧急援助</strong><br>📱 <strong>WhatsApp：</strong> +1 334 763 3841<br>📧 <strong>Email:</strong> ceo@vsc.supply ⚓" },
      { keywords: ['投诉', '索赔'], response: "请发送问题详情、参考编号和证据至：<br>📧 <strong>ceo@vsc.supply</strong> ⚓" },
      { keywords: ['追踪', '跟踪'], response: "📡 📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp：</strong> +1 334 763 3841 ⚓" },
      { keywords: ['你好', '您好'], response: "您好！👋 欢迎来到 <strong>VSC &amp; SUPPLY LLC</strong>。我是 <strong>Victoria</strong>，您的虚拟助手。⚓" },
      { keywords: ['谢谢'], response: "不客气！😊<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp：</strong> +1 334 763 3841 ⚓" },
      { keywords: ['再见'], response: "再见！🌊 祝您顺风顺水。⚓" },
      { keywords: ['你是谁'], response: "我是 <strong>Victoria</strong>，VSC &amp; SUPPLY LLC 的虚拟助手。⚓" },
      { keywords: ['你能做什么'], response: "🤖 我可以帮助：<br>⚓ 公司信息<br>🚢 服务<br>🛡️ 认证<br>🌊 法规<br>👨‍✈️ 团队<br>📧 联系<br>💰 报价<br>📄 表格<br>📊 数据 🚢" },
      { keywords: ['天气'], response: "我没有实时天气信息，但我可以推荐 Windy.com、NOAA 和 PassageWeather。⚓" },
      { keywords: ['笑话'], response: "😄 您知道水手从不说两次“早上好”吗？因为第一次之后……已经是白天了！⚓" }
    ],

    ru: [
      { keywords: ['что такое vsc', 'о компании', 'кто вы', 'компания', 'бизнес', 'деятельность'], response: "🚢 <strong>VSC &amp; SUPPLY LLC</strong><br><br>Мы — глобальная морская компания, основанная в <strong>2021 году</strong> со штаб-квартирой в Голливуде, Флорида. Наш слоган: <strong>'Certainty &amp; Excellence at Sea'</strong>.<br><br>Мы управляем <strong>30+ судами</strong> и <strong>1,000+ моряками</strong>. ⚓" },
      { keywords: ['название компании', 'юридическое название'], response: "Наше полное юридическое название: <strong>VSC &amp; SUPPLY LLC</strong> ⚓" },
      { keywords: ['слоган', 'девиз'], response: "Наш официальный слоган: <strong>\"Certainty &amp; Excellence at Sea\"</strong> ⚓🌊" },
      { keywords: ['где вы', 'офис', 'адрес', 'штаб-квартира'], response: "📍 <strong>Корпоративный офис:</strong><br>2165 Van Buren St, Suite 911<br>Hollywood, FL 33020<br>United States 🇺🇸 🌎" },
      { keywords: ['как связаться', 'контакт', 'телефон', 'email', 'whatsapp'], response: "📞 <strong>Каналы связи 24/7:</strong><br><br>📧 <strong>Email:</strong> ceo@vsc.supply<br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>🏢 <strong>Офис:</strong> 2165 Van Buren St, Suite 911, Hollywood, FL 33020 ⚓" },
      { keywords: ['email', 'почта'], response: "Вы можете написать нам на: <strong>ceo@vsc.supply</strong><br><br>Мы отвечаем в течение 2 часов. ⚓" },
      { keywords: ['телефон', 'whatsapp'], response: "Вы можете связаться с нами через WhatsApp: <strong>+1 334 763 3841</strong> ⚓" },
      { keywords: ['часы работы', '24/7'], response: "Мы доступны <strong>24/7</strong>, 365 дней в году. ⚓🌊" },
      { keywords: ['когда основана', 'история'], response: "VSC &amp; SUPPLY LLC была основана в <strong>2021 году</strong>. ⚓" },
      { keywords: ['кто ceo', 'ceo', 'председатель'], response: "👨‍✈️ <strong>Capt. Victor Vielma</strong><br><strong>CEO и Председатель</strong><br><br>📧 <strong>ceo@vsc.supply</strong><br>📱 WhatsApp: +1 334 763 3841 ⚓" },
      { keywords: ['lorena', 'заместитель председателя'], response: "💼 <strong>Lorena Vielma</strong> — Заместитель Председателя ⚓" },
      { keywords: ['javier', 'it-менеджер'], response: "💻 <strong>V. Javier Vielma</strong> — IT-менеджер ⚓" },
      { keywords: ['команда руководства'], response: "Наша команда руководства:<br>👨‍✈️ Capt. Victor Vielma — CEO и Председатель<br>💼 Lorena Vielma — Заместитель Председателя<br>💻 V. Javier Vielma — IT-менеджер 🚢" },
      { keywords: ['какие услуги', 'услуги', 'направления'], response: "Мы предлагаем <strong>9 специализированных бизнес-подразделений</strong>:<br>1️⃣ Инспекции и Контроль Качества<br>2️⃣ Судовой Менеджмент<br>3️⃣ Фрахт и Брокеридж<br>4️⃣ Судовое Снабжение<br>5️⃣ Морское Агентство<br>6️⃣ Торговля Сырьевыми Товарами<br>7️⃣ Офшорные Услуги<br>8️⃣ Морская Логистика<br>9️⃣ Морской Консалтинг 🚢" },
      { keywords: ['инспекции', 'q&q'], response: "🛡️ <strong>Инспекции и Контроль Качества</strong><br>✅ Q&amp;Q Surveys<br>✅ Контроль потерь<br>✅ Бункерные и драфт-сюрвеи<br>✅ Фискальный контроль ⚓" },
      { keywords: ['судовой менеджмент', 'ism'], response: "🚢 <strong>Судовой Менеджмент</strong><br>✅ Технический менеджмент<br>✅ Управление экипажем<br>✅ Соответствие классам<br>✅ Страхование ⚓" },
      { keywords: ['фрахт', 'чартер'], response: "⚓ <strong>Фрахт и Брокеридж</strong><br>✅ Тайм-чартер (TC)<br>✅ Рейсовый чартер (VC)<br>✅ COA<br>✅ Бербоут-чартер<br>✅ Спотовые контракты ⚓" },
      { keywords: ['форма', 'чартерная форма', 'скачать'], response: "📄 <strong>Чартерная форма</strong><br><br>👉 <a href='img/VSC_FORM.pdf' download='VSC_FORM.pdf' target='_blank' style='color: #00C2CB; text-decoration: underline; font-weight: 600;'>Скачать чартерную форму (PDF)</a><br><br>Отправьте на:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['снабжение', 'провизия'], response: "🚢 <strong>Судовое Снабжение</strong><br>✅ Провизия<br>✅ Запасы<br>✅ Смазочные<br>✅ Запчасти<br>✅ Пресная вода<br>✅ Мелкий ремонт 🌎" },
      { keywords: ['агентство', 'порт'], response: "⚓ <strong>Морское Агентство</strong><br>✅ Портовое агентство<br>✅ Надзор за погрузкой<br>✅ Смена экипажа<br>✅ Таможня<br>✅ ISPS 🌎" },
      { keywords: ['сырьевые товары', 'нефть'], response: "🛢️ <strong>Торговля Сырьевыми Товарами</strong><br>🛢️ Сырая нефть<br>⛽ Дизель<br>🧪 Химикаты<br>🌾 Агропродовольствие ⚓" },
      { keywords: ['офшор', 'osv'], response: "🌊 <strong>Офшорные Услуги</strong><br>✅ OSV, AHT, PSV<br>✅ Подводные работы<br>✅ Проектные грузы<br>✅ Спасательные работы ⚓" },
      { keywords: ['логистика', 'fcl'], response: "🚢 <strong>Морская Логистика</strong><br>✅ FCL/LCL<br>✅ Морской экспедитор<br>✅ Консолидация грузов<br>✅ Таможенные документы ⚓" },
      { keywords: ['консалтинг', 'аудит'], response: "⚖️ <strong>Морской Консалтинг</strong><br>✅ Аудиты<br>✅ Расследование происшествий<br>✅ Страховые требования<br>✅ Экспертные показания ⚓" },
      { keywords: ['сертификации', 'ifia', 'iso'], response: "🏆 <strong>Сертификации</strong><br>✅ IFIA<br>✅ ISO 9001:2015<br>✅ ISO 17020<br>✅ ASTM<br>✅ API<br>✅ IP 🛡️" },
      { keywords: ['нормативы', 'marpol', 'solas', 'imo'], response: "🌊 <strong>Международные Нормативы</strong><br>✅ MARPOL<br>✅ SOLAS<br>✅ ISM<br>✅ ISPS<br>✅ MLC 2006<br>✅ IMO ⚓" },
      { keywords: ['экология', 'цур', 'оон'], response: "🌊 <strong>Экологические Обязательства</strong><br>✅ Политики ООН<br>✅ ЦУР 13<br>✅ ЦУР 14<br>✅ Нулевой сброс 🌊" },
      { keywords: ['сколько судов', 'флот'], response: "🚢 Мы управляем более <strong>30 судами</strong>. ⚓" },
      { keywords: ['сколько моряков'], response: "👨‍✈️ Мы управляем более <strong>1,000 моряками</strong>. 🚢" },
      { keywords: ['расчёт', 'цена'], response: "💰 Мне нужно знать: услугу, судно/груз, порт(ы), даты.<br><br>📧 ceo@vsc.supply<br>📱 +1 334 763 3841 ⚓" },
      { keywords: ['оплата', 'способы'], response: "💳 Мы принимаем международный перевод, оплату против документов, аккредитивы. ⚓" },
      { keywords: ['panamax', 'capesize', 'типы судов'], response: "🚢 Основные типы балкеров:<br>🚢 Handysize — 10,000-35,000 DWT<br>🚢 Handymax — 35,000-50,000 DWT<br>🚢 Panamax — 60,000-80,000 DWT<br>🚢 Capesize — 100,000-200,000 DWT ⚓" },
      { keywords: ['dwt'], response: "<strong>DWT</strong> — дедвейт, общая грузоподъёмность судна. ⚓" },
      { keywords: ['teu'], response: "<strong>TEU</strong> — единица измерения в контейнерных перевозках. 🚢" },
      { keywords: ['бункеровка', 'bunker'], response: "<strong>Бункеровка</strong> — поставка топлива на суда: VLSFO, MGO, HFO, LNG. ⚓" },
      { keywords: ['imo'], response: "<strong>IMO</strong> — специализированное учреждение ООН по морской безопасности. ⚓" },
      { keywords: ['клиенты'], response: "Мы работаем с международными нефтетрейдерами, судовладельцами, страховщиками и юридическими фирмами. ⚓" },
      { keywords: ['работа', 'вакансии', 'резюме'], response: "👨‍✈️ Отправьте резюме: <strong>ceo@vsc.supply</strong> ⚓" },
      { keywords: ['офисы', 'сеть'], response: "🌎 Корпоративный офис в Голливуде, Флорида. Агенты в Америке, Европе, Африке, Азии и на Ближнем Востоке. ⚓" },
      { keywords: ['встреча', 'записаться'], response: "📅 📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['проблема', 'срочно', 'emergency'], response: "🚨 <strong>СРОЧНАЯ ПОМОЩЬ 24/7</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841<br>📧 <strong>Email:</strong> ceo@vsc.supply ⚓" },
      { keywords: ['жалоба'], response: "Отправьте детали, номер ссылки и доказательства на: <strong>ceo@vsc.supply</strong> ⚓" },
      { keywords: ['отслеживание'], response: "📡 📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['привет', 'здравствуйте'], response: "Здравствуйте! 👋 Добро пожаловать в <strong>VSC &amp; SUPPLY LLC</strong>. Я <strong>Victoria</strong>, ваш виртуальный ассистент. ⚓" },
      { keywords: ['спасибо'], response: "Пожалуйста! 😊<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓" },
      { keywords: ['пока', 'до свидания'], response: "До свидания! 🌊 Попутного ветра. ⚓" },
      { keywords: ['кто ты'], response: "Я <strong>Victoria</strong>, виртуальный ассистент VSC &amp; SUPPLY LLC. ⚓" },
      { keywords: ['что ты умеешь'], response: "🤖 Я могу помочь с:<br>⚓ Информация о компании<br>🚢 Услуги<br>🛡️ Сертификации<br>🌊 Нормативы<br>👨‍✈️ Команда<br>📧 Контакт<br>💰 Расчёты<br>📄 Формы<br>📊 Данные 🚢" },
      { keywords: ['погода'], response: "У меня нет информации о погоде в реальном времени. Рекомендую Windy.com, NOAA и PassageWeather. ⚓" },
      { keywords: ['шутка'], response: "😄 Знаете, что моряки никогда не говорят 'доброе утро' дважды? После первого уже день! ⚓" }
    ]
  };

  // ============================================
  // 🎯 MOTOR DE MATCHING AVANZADO CON SINÓNIMOS  // ============================================
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function findBestResponse(userText, lang) {
    const text = normalizeText(userText);
    const base = knowledgeBase[lang] || knowledgeBase.es;

    if (!text || text.length < 2) return null;

    let bestMatch = null;
    let bestScore = 0;

    for (const entry of base) {
      let score = 0;

      // Expandir keywords con sinónimos del idioma
      const expandedKeywords = expandWithSynonyms(entry.keywords, lang);

      for (const keyword of expandedKeywords) {
        const kw = normalizeText(keyword);
        const kwStem = stem(kw);

        // Match exacto → peso alto
        if (text.includes(kw)) {
          score += 20 + kw.length * 2;
          continue;
        }

        // Match con stemming
        if (kwStem.length > 3 && text.includes(kwStem)) {
          score += 12;
          continue;
        }

        // Match por palabras individuales
        const kwWords = kw.split(/\s+/).filter(w => w.length > 2);
        let wordMatches = 0;
        for (const word of kwWords) {
          const wordStem = stem(word);
          if (text.includes(word) || (wordStem.length > 3 && text.includes(wordStem))) {
            wordMatches++;
            score += 4;
          }
        }

        // Bonus si todas las palabras coinciden
        if (kwWords.length > 1 && wordMatches === kwWords.length) {
          score += 15;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    // Threshold dinámico
    const threshold = text.length < 5 ? 8 : 12;

    if (bestScore >= threshold) {
      return bestMatch.response;
    }

    return null;
  }

  function getFallbackResponse(lang) {
    const fallbacks = {
      es: "Disculpe, no tengo información específica sobre eso en mi base de conocimiento.<br><br>Puedo ayudarle con:<br>🚢 <strong>Servicios</strong> — las 9 unidades de negocio<br>🛡️ <strong>Certificaciones</strong> — IFIA, ISO, ASTM<br>👨‍✈️ <strong>Equipo</strong> — CEO, Vice Chairman, IT Manager<br>📧 <strong>Contacto</strong> — ceo@vsc.supply · WhatsApp +1 334 763 3841<br>💰 <strong>Cotizaciones</strong> — info y proceso<br>📄 <strong>Formularios</strong> — descarga del Chartering Form<br><br>Para consultas más específicas, contáctenos:<br>📧 <strong>ceo@vsc.supply</strong><br>📱 <strong>WhatsApp:</strong> +1 334 763 3841 ⚓",
      en: "Sorry, I don't have specific information about that. I can help with: services, certifications, team, contact, quotes, forms. Contact us at ceo@vsc.supply or WhatsApp +1 334 763 3841. ⚓",
      zh: "抱歉，我的知识库中没有关于这个问题的具体信息。我可以帮助您了解服务、认证、团队、联系、报价和表格。请联系 ceo@vsc.supply 或 WhatsApp +1 334 763 3841。⚓",
      ru: "Извините, у меня нет конкретной информации об этом. Я могу помочь с услугами, сертификациями, командой, контактами, расчётами и формами. Свяжитесь с нами: ceo@vsc.supply или WhatsApp +1 334 763 3841. ⚓"
    };
    return fallbacks[lang] || fallbacks.es;
  }

  // ============================================
  // CREAR HTML DEL WIDGET
  // ============================================
  function createChatWidget() {
    const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'es';
    const tr = (key) => (translations[lang] && translations[lang][key]) || key;

    const widget = document.createElement('div');
    widget.innerHTML = `
      <div class="chat-window" id="chatWindow">
        <div class="chat-header">
          <div class="chat-avatar">
            <img src="img/logo.png" alt="Victoria">
          </div>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:600;color:#fff;" data-chat-i18n="chat_title">${tr('chat_title')}</div>
            <div style="font-size:11px;color:#00E5A0;display:flex;align-items:center;gap:5px;margin-top:2px;">
              <span style="width:6px;height:6px;border-radius:50%;background:#00E5A0;"></span>
              <span data-chat-i18n="chat_status">${tr('chat_status')}</span>
            </div>
          </div>
          <button id="chatClose" style="background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:20px;padding:4px;">×</button>
        </div>
        <div class="chat-messages" id="chatMessages"></div>
        <form class="chat-input-area" id="chatForm">
          <input type="text" class="chat-input" id="chatInput" placeholder="${tr('chat_placeholder')}" autocomplete="off">
          <button type="submit" class="chat-send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </div>
      <button class="chat-bubble" id="chatBubble" aria-label="Chat">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </button>
    `;
    document.body.appendChild(widget);
  }

  // ============================================
  // LÓGICA DEL CHAT
  // ============================================
  function initChat() {
    const bubble = document.getElementById('chatBubble');
    const windowEl = document.getElementById('chatWindow');
    const close = document.getElementById('chatClose');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');

    let initialized = false;

    function addMessage(text, sender) {
      const msg = document.createElement('div');
      msg.className = `chat-message ${sender}`;
      msg.innerHTML = text;
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
      return msg;
    }

    function addTypingIndicator() {
      const typing = document.createElement('div');
      typing.className = 'chat-message bot';
      typing.id = 'typingIndicator';
      typing.style.cssText = 'display:flex;gap:4px;align-items:center;';
      typing.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#00C2CB;animation:pulse 1.4s infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:#00C2CB;animation:pulse 1.4s infinite 0.2s;"></span><span style="width:6px;height:6px;border-radius:50%;background:#00C2CB;animation:pulse 1.4s infinite 0.4s;"></span>';
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
    }

    function removeTypingIndicator() {
      const typing = document.getElementById('typingIndicator');
      if (typing) typing.remove();
    }

    function getResponse(userText) {
      const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'es';
      const match = findBestResponse(userText, lang);
      return match || getFallbackResponse(lang);
    }

    function showWelcome() {
      const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'es';
      const tr = (key) => (translations[lang] && translations[lang][key]) || key;

      messages.innerHTML = '';
      addMessage(tr('chat_welcome'), 'bot');

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-top:6px;';
      ['chat_opt_1', 'chat_opt_2', 'chat_opt_3', 'chat_opt_4'].forEach(optKey => {
        const btn = document.createElement('button');
        btn.textContent = tr(optKey);
        btn.style.cssText = 'background:rgba(0,194,203,0.1);border:1px solid rgba(0,194,203,0.3);color:#00C2CB;padding:9px 14px;border-radius:12px;font-size:13px;font-family:inherit;cursor:pointer;text-align:left;transition:all .2s;';
        btn.onmouseover = () => { btn.style.background = 'rgba(0,194,203,0.2)'; };
        btn.onmouseout = () => { btn.style.background = 'rgba(0,194,203,0.1)'; };
        btn.onclick = () => {
          input.value = btn.textContent;
          form.dispatchEvent(new Event('submit'));
        };
        optionsWrap.appendChild(btn);
      });
      messages.appendChild(optionsWrap);
      messages.scrollTop = messages.scrollHeight;
    }

    bubble.addEventListener('click', () => {
      windowEl.classList.toggle('open');
      if (!initialized) {
        showWelcome();
        initialized = true;
      }
    });

    close.addEventListener('click', () => windowEl.classList.remove('open'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, 'user');
      input.value = '';
      input.disabled = true;
      addTypingIndicator();

      setTimeout(() => {
        removeTypingIndicator();
        const response = getResponse(text);
        addMessage(response, 'bot');
        input.disabled = false;
        input.focus();
      }, 500 + Math.random() * 400);
    });

    document.addEventListener('languageChanged', () => {
      const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'es';
      const tr = (key) => (translations[lang] && translations[lang][key]) || key;

      document.querySelectorAll('[data-chat-i18n]').forEach(el => {
        const key = el.dataset.chatI18n;
        el.textContent = tr(key);
      });

      input.placeholder = tr('chat_placeholder');

      if (initialized) {
        showWelcome();
        initialized = true;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    createChatWidget();
    initChat();
  });
})();