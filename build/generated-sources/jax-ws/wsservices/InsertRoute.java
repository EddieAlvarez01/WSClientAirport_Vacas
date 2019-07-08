
package wsservices;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para InsertRoute complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="InsertRoute">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="code1" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="code2" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="cost" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="time" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="pilot" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "InsertRoute", propOrder = {
    "code1",
    "code2",
    "cost",
    "time",
    "pilot"
})
public class InsertRoute {

    protected int code1;
    protected int code2;
    protected double cost;
    protected int time;
    protected String pilot;

    /**
     * Obtiene el valor de la propiedad code1.
     * 
     */
    public int getCode1() {
        return code1;
    }

    /**
     * Define el valor de la propiedad code1.
     * 
     */
    public void setCode1(int value) {
        this.code1 = value;
    }

    /**
     * Obtiene el valor de la propiedad code2.
     * 
     */
    public int getCode2() {
        return code2;
    }

    /**
     * Define el valor de la propiedad code2.
     * 
     */
    public void setCode2(int value) {
        this.code2 = value;
    }

    /**
     * Obtiene el valor de la propiedad cost.
     * 
     */
    public double getCost() {
        return cost;
    }

    /**
     * Define el valor de la propiedad cost.
     * 
     */
    public void setCost(double value) {
        this.cost = value;
    }

    /**
     * Obtiene el valor de la propiedad time.
     * 
     */
    public int getTime() {
        return time;
    }

    /**
     * Define el valor de la propiedad time.
     * 
     */
    public void setTime(int value) {
        this.time = value;
    }

    /**
     * Obtiene el valor de la propiedad pilot.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPilot() {
        return pilot;
    }

    /**
     * Define el valor de la propiedad pilot.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPilot(String value) {
        this.pilot = value;
    }

}
