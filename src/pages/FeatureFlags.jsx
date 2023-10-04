import { Container, Alert } from "react-bootstrap"
import * as braze from "@braze/web-sdk"

export default function FeatureFlags() {
    
    const stitchboxBanner = braze.getFeatureFlag("stitchbox-banner")

    if (stitchboxBanner.enabled) {
        const bannerVariant = stitchboxBanner.getStringProperty("banner_variant")
        const bannerText = stitchboxBanner.getStringProperty("banner_text")

        return (
            <Container className="jumbotron">
                <h1 className="display-3 mt-4">Feature Flags</h1>
                <Alert variant={bannerVariant}>
                    <Alert.Heading>{bannerText}</Alert.Heading>
                </Alert>
            </Container>
        )
    } else return (
        <Container className="jumbotron">
            <h1 className="display-3 mt-4">Feature Flags</h1>
            <Alert variant="warning">
                    <Alert.Heading>You're not seeing the feature flag right now. Create a Feature Flag with ID 'stitchbox-banner', and properties 'banner_variant' = 'success' and 'banner-text' = [whatever you want].</Alert.Heading>
            </Alert>
        </Container>
    )
}