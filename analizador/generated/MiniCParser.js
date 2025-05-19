// Generated from c:/Users/gomez/OneDrive/Escritorio/ssl1/ssl-antlr-calculator/MiniC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCListener from './MiniCListener.js';
import MiniCVisitor from './MiniCVisitor.js';

const serializedATN = [4,1,17,109,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,2,1,2,3,2,40,8,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,5,4,52,8,4,10,4,12,4,55,9,4,1,5,1,
5,1,5,1,6,5,6,61,8,6,10,6,12,6,64,9,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,
9,1,9,1,9,1,9,5,9,78,8,9,10,9,12,9,81,9,9,1,10,1,10,1,10,1,10,1,10,1,10,
5,10,89,8,10,10,10,12,10,92,9,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,100,
8,11,1,12,1,12,5,12,104,8,12,10,12,12,12,107,9,12,1,12,0,2,18,20,13,0,2,
4,6,8,10,12,14,16,18,20,22,24,0,4,1,0,5,7,1,0,11,12,1,0,13,14,1,0,15,16,
104,0,26,1,0,0,0,2,32,1,0,0,0,4,35,1,0,0,0,6,46,1,0,0,0,8,48,1,0,0,0,10,
56,1,0,0,0,12,62,1,0,0,0,14,65,1,0,0,0,16,67,1,0,0,0,18,71,1,0,0,0,20,82,
1,0,0,0,22,99,1,0,0,0,24,101,1,0,0,0,26,27,3,2,1,0,27,28,5,0,0,1,28,1,1,
0,0,0,29,31,3,4,2,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,
0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,3,6,3,0,36,37,3,24,12,0,37,39,5,1,0,
0,38,40,3,8,4,0,39,38,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,2,0,0,
42,43,5,3,0,0,43,44,3,12,6,0,44,45,5,4,0,0,45,5,1,0,0,0,46,47,7,0,0,0,47,
7,1,0,0,0,48,53,3,10,5,0,49,50,5,8,0,0,50,52,3,10,5,0,51,49,1,0,0,0,52,55,
1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,9,1,0,0,0,55,53,1,0,0,0,56,57,3,6,
3,0,57,58,3,24,12,0,58,11,1,0,0,0,59,61,3,14,7,0,60,59,1,0,0,0,61,64,1,0,
0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,13,1,0,0,0,64,62,1,0,0,0,65,66,3,16,8,
0,66,15,1,0,0,0,67,68,5,9,0,0,68,69,3,18,9,0,69,70,5,10,0,0,70,17,1,0,0,
0,71,72,6,9,-1,0,72,73,3,20,10,0,73,79,1,0,0,0,74,75,10,2,0,0,75,76,7,1,
0,0,76,78,3,20,10,0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,
0,0,80,19,1,0,0,0,81,79,1,0,0,0,82,83,6,10,-1,0,83,84,3,22,11,0,84,90,1,
0,0,0,85,86,10,2,0,0,86,87,7,2,0,0,87,89,3,22,11,0,88,85,1,0,0,0,89,92,1,
0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,21,1,0,0,0,92,90,1,0,0,0,93,94,5,1,
0,0,94,95,3,18,9,0,95,96,5,2,0,0,96,100,1,0,0,0,97,100,3,24,12,0,98,100,
5,16,0,0,99,93,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,23,1,0,0,0,101,105,
5,15,0,0,102,104,7,3,0,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,
105,106,1,0,0,0,106,25,1,0,0,0,107,105,1,0,0,0,8,32,39,53,62,79,90,99,105];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCParser extends antlr4.Parser {

    static grammarFileName = "MiniC.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'int'", "'float'", 
                            "'char'", "','", "'return'", "';'", "'+'", "'-'", 
                            "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LETRA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "parametros", "parametro", "cuerpo", "instruccion", 
                         "retorno", "expresion", "termino", "factor", "identificador" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCParser.ruleNames;
        this.literalNames = MiniCParser.literalNames;
        this.symbolicNames = MiniCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 10:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.declaraciones();
	        this.state = 27;
	        this.match(MiniCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniCParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0)) {
	            this.state = 29;
	            this.declaracion();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.tipo();
	        this.state = 36;
	        this.identificador();
	        this.state = 37;
	        this.match(MiniCParser.T__0);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0)) {
	            this.state = 38;
	            this.parametros();
	        }

	        this.state = 41;
	        this.match(MiniCParser.T__1);
	        this.state = 42;
	        this.match(MiniCParser.T__2);
	        this.state = 43;
	        this.cuerpo();
	        this.state = 44;
	        this.match(MiniCParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniCParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.parametro();
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 49;
	            this.match(MiniCParser.T__7);
	            this.state = 50;
	            this.parametro();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.tipo();
	        this.state = 57;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCParser.RULE_cuerpo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 59;
	            this.instruccion();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(MiniCParser.T__8);
	        this.state = 68;
	        this.expresion(0);
	        this.state = 69;
	        this.match(MiniCParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, MiniCParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpresionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_expresion);
	                this.state = 74;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 75;
	                _la = this._input.LA(1);
	                if(!(_la===11 || _la===12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 76;
	                this.termino(0); 
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, MiniCParser.RULE_termino, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TerminoContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_termino);
	                this.state = 85;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 86;
	                _la = this._input.LA(1);
	                if(!(_la===13 || _la===14)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 87;
	                this.factor(); 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiniCParser.RULE_factor);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.match(MiniCParser.T__0);
	            this.state = 94;
	            this.expresion(0);
	            this.state = 95;
	            this.match(MiniCParser.T__1);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.identificador();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.match(MiniCParser.DIGITO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiniCParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(MiniCParser.LETRA);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 102;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCParser.EOF = antlr4.Token.EOF;
MiniCParser.T__0 = 1;
MiniCParser.T__1 = 2;
MiniCParser.T__2 = 3;
MiniCParser.T__3 = 4;
MiniCParser.T__4 = 5;
MiniCParser.T__5 = 6;
MiniCParser.T__6 = 7;
MiniCParser.T__7 = 8;
MiniCParser.T__8 = 9;
MiniCParser.T__9 = 10;
MiniCParser.T__10 = 11;
MiniCParser.T__11 = 12;
MiniCParser.T__12 = 13;
MiniCParser.T__13 = 14;
MiniCParser.LETRA = 15;
MiniCParser.DIGITO = 16;
MiniCParser.WS = 17;

MiniCParser.RULE_programa = 0;
MiniCParser.RULE_declaraciones = 1;
MiniCParser.RULE_declaracion = 2;
MiniCParser.RULE_tipo = 3;
MiniCParser.RULE_parametros = 4;
MiniCParser.RULE_parametro = 5;
MiniCParser.RULE_cuerpo = 6;
MiniCParser.RULE_instruccion = 7;
MiniCParser.RULE_retorno = 8;
MiniCParser.RULE_expresion = 9;
MiniCParser.RULE_termino = 10;
MiniCParser.RULE_factor = 11;
MiniCParser.RULE_identificador = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	EOF() {
	    return this.getToken(MiniCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_declaraciones;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_factor;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	DIGITO() {
	    return this.getToken(MiniCParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.LETRA);
	    } else {
	        return this.getToken(MiniCParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.DIGITO);
	    } else {
	        return this.getToken(MiniCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniCParser.ProgramaContext = ProgramaContext; 
MiniCParser.DeclaracionesContext = DeclaracionesContext; 
MiniCParser.DeclaracionContext = DeclaracionContext; 
MiniCParser.TipoContext = TipoContext; 
MiniCParser.ParametrosContext = ParametrosContext; 
MiniCParser.ParametroContext = ParametroContext; 
MiniCParser.CuerpoContext = CuerpoContext; 
MiniCParser.InstruccionContext = InstruccionContext; 
MiniCParser.RetornoContext = RetornoContext; 
MiniCParser.ExpresionContext = ExpresionContext; 
MiniCParser.TerminoContext = TerminoContext; 
MiniCParser.FactorContext = FactorContext; 
MiniCParser.IdentificadorContext = IdentificadorContext; 
