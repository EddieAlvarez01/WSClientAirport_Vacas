
package wsservices;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the wsservices package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ConstructMatrixResponse_QNAME = new QName("http://WSServices/", "ConstructMatrixResponse");
    private final static QName _InsertDestinationResponse_QNAME = new QName("http://WSServices/", "InsertDestinationResponse");
    private final static QName _HelloResponse_QNAME = new QName("http://WSServices/", "helloResponse");
    private final static QName _InsertRouteResponse_QNAME = new QName("http://WSServices/", "InsertRouteResponse");
    private final static QName _InsertDestination_QNAME = new QName("http://WSServices/", "InsertDestination");
    private final static QName _ConstructMatrix_QNAME = new QName("http://WSServices/", "ConstructMatrix");
    private final static QName _GetGraphsResponse_QNAME = new QName("http://WSServices/", "GetGraphsResponse");
    private final static QName _GetGraphs_QNAME = new QName("http://WSServices/", "GetGraphs");
    private final static QName _Hello_QNAME = new QName("http://WSServices/", "hello");
    private final static QName _InsertRoute_QNAME = new QName("http://WSServices/", "InsertRoute");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: wsservices
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link InsertRouteResponse }
     * 
     */
    public InsertRouteResponse createInsertRouteResponse() {
        return new InsertRouteResponse();
    }

    /**
     * Create an instance of {@link InsertDestination }
     * 
     */
    public InsertDestination createInsertDestination() {
        return new InsertDestination();
    }

    /**
     * Create an instance of {@link ConstructMatrixResponse }
     * 
     */
    public ConstructMatrixResponse createConstructMatrixResponse() {
        return new ConstructMatrixResponse();
    }

    /**
     * Create an instance of {@link InsertDestinationResponse }
     * 
     */
    public InsertDestinationResponse createInsertDestinationResponse() {
        return new InsertDestinationResponse();
    }

    /**
     * Create an instance of {@link HelloResponse }
     * 
     */
    public HelloResponse createHelloResponse() {
        return new HelloResponse();
    }

    /**
     * Create an instance of {@link GetGraphsResponse }
     * 
     */
    public GetGraphsResponse createGetGraphsResponse() {
        return new GetGraphsResponse();
    }

    /**
     * Create an instance of {@link InsertRoute }
     * 
     */
    public InsertRoute createInsertRoute() {
        return new InsertRoute();
    }

    /**
     * Create an instance of {@link GetGraphs }
     * 
     */
    public GetGraphs createGetGraphs() {
        return new GetGraphs();
    }

    /**
     * Create an instance of {@link Hello }
     * 
     */
    public Hello createHello() {
        return new Hello();
    }

    /**
     * Create an instance of {@link ConstructMatrix }
     * 
     */
    public ConstructMatrix createConstructMatrix() {
        return new ConstructMatrix();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConstructMatrixResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "ConstructMatrixResponse")
    public JAXBElement<ConstructMatrixResponse> createConstructMatrixResponse(ConstructMatrixResponse value) {
        return new JAXBElement<ConstructMatrixResponse>(_ConstructMatrixResponse_QNAME, ConstructMatrixResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link InsertDestinationResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "InsertDestinationResponse")
    public JAXBElement<InsertDestinationResponse> createInsertDestinationResponse(InsertDestinationResponse value) {
        return new JAXBElement<InsertDestinationResponse>(_InsertDestinationResponse_QNAME, InsertDestinationResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link HelloResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "helloResponse")
    public JAXBElement<HelloResponse> createHelloResponse(HelloResponse value) {
        return new JAXBElement<HelloResponse>(_HelloResponse_QNAME, HelloResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link InsertRouteResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "InsertRouteResponse")
    public JAXBElement<InsertRouteResponse> createInsertRouteResponse(InsertRouteResponse value) {
        return new JAXBElement<InsertRouteResponse>(_InsertRouteResponse_QNAME, InsertRouteResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link InsertDestination }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "InsertDestination")
    public JAXBElement<InsertDestination> createInsertDestination(InsertDestination value) {
        return new JAXBElement<InsertDestination>(_InsertDestination_QNAME, InsertDestination.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConstructMatrix }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "ConstructMatrix")
    public JAXBElement<ConstructMatrix> createConstructMatrix(ConstructMatrix value) {
        return new JAXBElement<ConstructMatrix>(_ConstructMatrix_QNAME, ConstructMatrix.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetGraphsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "GetGraphsResponse")
    public JAXBElement<GetGraphsResponse> createGetGraphsResponse(GetGraphsResponse value) {
        return new JAXBElement<GetGraphsResponse>(_GetGraphsResponse_QNAME, GetGraphsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetGraphs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "GetGraphs")
    public JAXBElement<GetGraphs> createGetGraphs(GetGraphs value) {
        return new JAXBElement<GetGraphs>(_GetGraphs_QNAME, GetGraphs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Hello }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "hello")
    public JAXBElement<Hello> createHello(Hello value) {
        return new JAXBElement<Hello>(_Hello_QNAME, Hello.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link InsertRoute }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://WSServices/", name = "InsertRoute")
    public JAXBElement<InsertRoute> createInsertRoute(InsertRoute value) {
        return new JAXBElement<InsertRoute>(_InsertRoute_QNAME, InsertRoute.class, null, value);
    }

}
