export default function VideoSection() {
    return (
        <div className=" w-full py-6">
            <iframe width="1000" height="500"
                src="https://www.youtube.com/embed/9hW6TxoYhqw?si=4fP2_5ZYQjO5UAqC"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            <p className="text-white font-sans tracking-[8px] text-center text-md font-semibold py-5 w-full">
                OUR EFFORTS HAVE BEEN RECOGNISED BY MANY
            </p>
        </div>

    );
}